// this is mostly copy-pasted from https://github.com/expo/expo/blob/master/tools/src/Markdown.ts

import { unescape } from 'lodash-es';
import { Tokens, marked } from 'marked';

type TokenType = Token['type'];

type SimpleToken<Type> = { type: Type; raw: string };

export type TextToken = Omit<Tokens.Text, 'raw' | 'tokens'> & {
  raw?: string;
  tokens?: Token[];
}

export type HeadingToken = Omit<Tokens.Heading, 'raw' | 'tokens'> & {
  raw?: string;
  tokens: Token[];
};

export type ListToken = Omit<Tokens.List, 'raw' | 'items' | 'start' | 'loose'> & {
  raw?: string;
  start?: string;
  items: ListItemToken[];
  depth: number;
};

export type ListItemToken = Omit<Tokens.ListItem, 'raw' | 'tokens' | 'loose'> & {
  raw?: string;
  tokens: Token[];
  depth: number;
};

export type ParagraphToken = Omit<Tokens.Paragraph, 'raw' | 'tokens'> & {
  raw?: string;
  tokens: Token[];
}

export type SpaceToken = Omit<Tokens.Space, 'raw'> & {
  raw?: string;
}

export type CodeToken = Omit<Tokens.Code, 'raw' | 'lang'> & {
  raw?: string;
  lang: string;
};

export type BlockquoteToken = Omit<Tokens.Blockquote, 'raw' | 'tokens'> & {
  raw?: string;
  tokens: Token[];
};

export type Token =
  | HeadingToken
  | ListToken
  | ListItemToken
  | ParagraphToken
  | TextToken
  | SpaceToken
  | CodeToken
  | BlockquoteToken;

type Links = Record<string, Pick<Tokens.Link | Tokens.Image, 'href' | 'title'>>;

export type TokensList = Token[] & {
  links?: Links;
};

export interface Renderer {
  render(tokens: Token[]): string;
}

/**
 * Receives markdown text and returns an array of tokens.
 */
export function lexify(text: string): TokensList {
  const tokens = marked.lexer(text) as TokensList;
  recursivelyFixTokens(tokens);
  return tokens;
}

/**
 * Receives an array of tokens and renders them to markdown.
 */
export function render(tokens: TokensList, renderer: Renderer = new MarkdownRenderer()): string {
  // `marked` module is good enough in terms of lexifying, but its main purpose is to
  // convert markdown to html, so we need to write our own renderer for changelogs.
  return unescape(renderer.render(tokens).trim() + EOL);
}

/**
 * Creates heading token with given text and depth.
 */
export function createHeadingToken(text: string, depth: number = 1): HeadingToken {
  return {
    type: 'heading',
    depth,
    text,
    tokens: [createTextToken(text)],
  };
}

/**
 * Returns a token from given text.
 */
export function createTextToken(text: string): TextToken {
  return {
    type: 'text',
    text,
  };
}

export function createListToken(depth: number = 1): ListToken {
  return {
    type: 'list',
    depth,
    ordered: false,
    items: [],
  };
}

export function createListItemToken(text: string, depth: number = 0): ListItemToken {
  return {
    type: 'list_item',
    depth,
    text,
    tokens: [createTextToken(text)],
    task: false,
  };
}

export function createSpaceToken(text: string): SpaceToken {
  return {
    type: 'space',
    raw: text,
  };
}

/**
 * Type guard for tokens extending TextToken.
 */
export function isTextToken(token: Token): token is TextToken {
  return token?.type === 'text';
}

/**
 * Type guard for HeadingToken type.
 */
export function isHeadingToken(token: Token): token is HeadingToken {
  return token?.type === 'heading';
}

/**
 * Type guard for ListToken type.
 */
export function isListToken(token: Token): token is ListToken {
  return token?.type === 'list';
}

/**
 * Type guard for ListItemToken type.
 */
export function isListItemToken(token: Token): token is ListItemToken {
  return token?.type === 'list_item';
}

/**
 * Indents subsequent lines in given string.
 */
export function indentMultilineString(
  str: string,
  depth: number = 0,
  indent: string = '  '
): string {
  return str.replace(/\n/g, '\n' + indent.repeat(depth));
}

/**
 * Fixes given tokens in place. We need to know depth of the list
 */
function recursivelyFixTokens(tokens: TokensList, listDepth: number = 0): void {
  for (const token of tokens) {
    if (token.type === 'list') {
      token.depth = listDepth;

      for (const item of token.items) {
        item.type = 'list_item';
        item.depth = listDepth;
        recursivelyFixTokens(item.tokens, listDepth + 1);
      }
    }
  }
}

const EOL = '\n';

export type RenderingContext = Partial<{
  indent: number;
  orderedList: boolean;
  itemIndex: number;
}>;

export class MarkdownRenderer implements Renderer {
  render(tokens: Token[]): string {
    let output = '';
    for (const token of tokens) {
      output += this.renderToken(token, { indent: 0 });
    }
    return output;
  }

  /* helpers */

  renderToken(token: Token, ctx: RenderingContext): string {
    switch (token.type) {
      case 'heading':
        return this.heading(token);
      case 'list':
        return this.list(token, ctx);
      case 'list_item':
        return this.listItem(token, ctx);
      case 'paragraph':
        return this.paragraph(token, ctx);
      case 'text':
        return this.text(token, ctx);
      case 'space':
        return this.space(token);
      case 'code':
        return this.code(token, ctx);
      case 'blockquote':
        return this.blockquote(token, ctx);
      default:
        // `marked` provides much more tokens, however we don't need to go so deep.
        // So far we needed only tokens with above types.
        throw new Error(`Cannot parse token: ${token}`);
    }
  }

  indent(depth?: number, indentStr: string = '  '): string {
    return depth ? indentStr.repeat(depth) : '';
  }

  /* tokens */

  heading(token: HeadingToken): string {
    return this.indent(token.depth, '#') + ' ' + token.text + EOL.repeat(2);
  }

  list(token: ListToken, ctx: { indent?: number }): string {
    let output = '';
    for (let i = 0; i < token.items.length; i++) {
      output += this.listItem(token.items[i], {
        ...ctx,
        orderedList: token.ordered,
        itemIndex: i + 1,
      });
    }
    return output;
  }

  listItem(token: ListItemToken, ctx: RenderingContext): string {
    const indent = ctx.indent ?? 0;
    const bullet = ctx.orderedList ? `${ctx.itemIndex ?? 1}.` : '-';
    let output = this.indent(indent) + bullet + ' ';

    if (token.tokens[0]) {
      // `renderToken` result is indented by default (e.g. got TextToken), but when dealing with lists
      // then list items indents are handled in above code instead
      output += this.renderToken(token.tokens[0], ctx).trim() + EOL;
    }

    for (const child of token.tokens.slice(1)) {
      output += this.renderToken(child, { ...ctx, indent: indent + 1 }).trimRight() + EOL;
    }
    return output.trimRight() + EOL;
  }

  paragraph(token: ParagraphToken, ctx: RenderingContext): string {
    return this.indent(ctx.indent) + token.text + EOL;
  }

  text(token: TextToken, ctx: RenderingContext): string {
    // TextToken may have children which we don't really need - they would render to `text` either way.
    return this.indent(ctx.indent) + token.text;
  }

  space(_token: SpaceToken): string {
    // Actually formatting of other tokens is good enough that we don't need to render additional newlines.
    return EOL;
  }

  code(token: CodeToken, ctx: RenderingContext): string {
    const lines = token.text.split(EOL);
    const indentStr = this.indent(ctx?.indent);

    lines.unshift('```' + token.lang ?? '');
    lines.push('```');

    return indentStr + lines.join(EOL + indentStr);
  }

  blockquote(token: BlockquoteToken, ctx: RenderingContext): string {
    const indentStr = this.indent(ctx.indent);

    return (
      indentStr +
      token.tokens
        .map(child => '> ' + this.renderToken(child, { ...ctx, indent: 0 }).trimRight())
        .join(EOL + indentStr)
    );
  }
}
