# Changelog

## main

### 🛠 Breaking changes

### 🎉 New features

### 🐛 Bug fixes

### 🧹 Chores

## [7.0.1](https://github.com/expo/sentry-expo/releases/tag/v7.0.1) - 2023-07-12

### 🛠 Breaking changes

### 🎉 New features

### 🐛 Bug fixes

- Remove dependency on expo-updates ([#356](https://github.com/expo/sentry-expo/pull/356) by [@brentvatne](https://github.com/brentvatne))
- Create new options object on every init to avoid read only error when initializing multiple times ([#350](https://github.com/expo/sentry-expo/pull/350) by [@krystofwoldrich](https://github.com/krystofwoldrich))

### 🧹 Chores

## [7.0.0](https://github.com/expo/sentry-expo/releases/tag/v7.0.0) - 2023-06-16

### 🛠 Breaking changes

- Upgrade `@sentry/react-native` to `5.5.0`. ([#337](https://github.com/expo/sentry-expo/pull/337) by [@krystofwoldrich](https://github.com/krystofwoldrich))
Checkout [the migration guide](https://docs.sentry.io/platforms/react-native/migration/#from-4x-to-5x) for breaking changes

### 🎉 New features

### 🐛 Bug fixes

### 🧹 Chores

## [6.2.2](https://github.com/expo/sentry-expo/releases/tag/v6.2.2) - 2023-06-19

### 🛠 Breaking changes

### 🎉 New features

### 🐛 Bug fixes

- Dynamically resolve `collectModulesScript` script path to support monorepos. ([#343](https://github.com/expo/sentry-expo/pull/343) by [@krystofwoldrich](https://github.com/krystofwoldrich))

### 🧹 Chores

## [6.2.1](https://github.com/expo/sentry-expo/releases/tag/v6.2.1) - 2023-06-07

### 🛠 Breaking changes

### 🎉 New features

### 🐛 Bug fixes

- RN Web Builds can't import SDK version from `@sentry/react-native`. ([#341](https://github.com/expo/sentry-expo/pull/341) by [@krystofwoldrich](https://github.com/krystofwoldrich))

### 🧹 Chores

## [6.2.0](https://github.com/expo/sentry-expo/releases/tag/v6.2.0) - 2023-06-06

### 🛠 Breaking changes

### 🎉 New features

- Upgrade `@sentry/react-native` to `4.15.2`. ([#339](https://github.com/expo/sentry-expo/pull/339) by [@krystofwoldrich](https://github.com/krystofwoldrich))

### 🐛 Bug fixes

- Build-time source maps upload support for Expo SDK 48. ([#331](https://github.com/expo/sentry-expo/pull/339) by [@krystofwoldrich](https://github.com/krystofwoldrich))

### 🧹 Chores

- Add `sentry-expo` metadata to the Sentry clients. This will help with debugging issues related to the SDKs. ([#331](https://github.com/expo/sentry-expo/pull/331) by [@krystofwoldrich](https://github.com/krystofwoldrich))

## [6.1.1](https://github.com/expo/sentry-expo/releases/tag/v6.1.1) - 2023-03-16

### 🐛 Bug fixes

- Discourage configuring `authToken` and point to `SENTRY_AUTH_TOKEN` and docs. ([#325](https://github.com/expo/sentry-expo/pull/325) by [@byCedric](https://github.com/byCedric))

## [6.1.0](https://github.com/expo/sentry-expo/releases/tag/v6.1.0) - 2023-03-04

### 🎉 New features

- Upgrade `@sentry/react-native` to `4.13.0`. ([#314](https://github.com/expo/sentry-expo/pull/314) by [@jbagaresgaray](https://github.com/jbagaresgaray))

### 🐛 Bug fixes

- Update Android script injection logic ([#322](https://github.com/expo/sentry-expo/pull/322) by [@kbrandwijk](https://github.com/kbrandwijk))

## [6.0.0](https://github.com/expo/sentry-expo/releases/tag/v6.0.0) - 2022-11-24

### 🛠 Breaking changes

- Add support for EAS Update. ([#302](https://github.com/expo/sentry-expo/pull/302) by [@kbrandwijk](https://github.com/kbrandwijk))
- Upgrade to SDK 47 ([#299](https://github.com/expo/sentry-expo/pull/299) by [@SimenB](https://github.com/SimenB))

### 🎉 New features

- Upgrade `@sentry/react-native` to `4.8.0` ([#301](https://github.com/expo/sentry-expo/pull/301) by [@SimenB](https://github.com/SimenB))

### 🐛 Bug fixes

- Fix an issue where `TypeError: undefined is not an object (evaluating 'error.stack.replace')` was thrown in some cases. ([#296](https://github.com/expo/sentry-expo/pull/296) by [@lachenmayer](https://github.com/lachenmayer))

### 🧹 Chores

- Replace `@sentry/browser` with `@sentry/react` ([#300](https://github.com/expo/sentry-expo/pull/300) by [@SimenB](https://github.com/SimenB))

## [5.0.3](https://github.com/expo/sentry-expo/releases/tag/v5.0.3) - 2022-10-08

### 🐛 Bug fixes

- Added `expo` to `peerDependencies` to match own `peerDependencies`. ([#286](https://github.com/expo/sentry-expo/pull/286) by [@SimenB](https://github.com/SimenB))
- Fix issue with config plugin being unable to modify Android gradle file with Expo 46. ([#290](https://github.com/expo/sentry-expo/pull/290)) by [@kbrandwijk](https://github.com/kbrandwijk))

## [5.0.2](https://github.com/expo/sentry-expo/releases/tag/v5.0.2) - 2022-08-09

### 🧹 Chores

- Bump `@sentry/react-native` to `4.2.2`. ([#277](https://github.com/expo/sentry-expo/pull/277) by [@SimenB](https://github.com/SimenB))

## [5.0.1](https://github.com/expo/sentry-expo/releases/tag/v5.0.1) - 2022-08-05

### 🧹 Chores

- Bump `@expo/config-plugins` to `~5.0.0`. ([#276](https://github.com/expo/sentry-expo/pull/276) by [@kbrandwijk](https://github.com/kbrandwijk))

## [5.0.0](https://github.com/expo/sentry-expo/releases/tag/v5.0.0) - 2022-07-19

### 🛠 Breaking changes

- Upgrade `@sentry/browser`, `@sentry/integrations`, `@sentry/react-native`, `@sentry/types` to support Sentry React Native V4

### 🧹 Chores

- Upgrade devDependencies to match Expo SDK 46

## 4.0.5 — 2021-11-23

- Fixed using `deviceYearClass` from `expo-constants`, which is now deprecated. `deviceYearClass` is now pulled from `expo-device`

## 4.0.4 — 2021-10-25

- Fixed writing `undefined` in sentry.properties if using env variables instead of app.json

## 4.0.3 — 2021-09-28

- Fixed monorepo support for iOS
- Added `--force-foreground` flag to Sentry CLI commands during iOS builds due to an issue with Sentry: https://github.com/getsentry/sentry-react-native/issues/1424

## 4.0.2 — 2021-09-27

- Upgrade `@sentry/browser`, `@sentry/integrations`, `@sentry/react-native`, `@sentry/types` to support Sentry React Native V3
- Fixed monorepo support for Android

## 4.0.1 — 2021-07-02

### 🐛 Bug fixes

- Do not force `@sentry/browser` and `@sentry/integrations` to `v6.7.2`.

## 4.0.0 — 2021-06-23

### 🛠 Breaking changes

- Removed `expo-application`, `expo-constants`, `expo-device`, and `expo-updates` as dependencies. From now on, developers will have to install these packages separately. This avoids a common issue where projects would end up having multiple versions of these libraries installed, but only one linked natively.

### 🐛 Bug fixes

- Only log "enableInExpoDevelopment" warning if `enableInExpoDevelopment` is not defined.

## 3.1.4 — 2021-04-23

### 🐛 Bug fixes

- No longer tracking `Constants.installationId` by default. Instead, tracking `Constants.sessionId`.
- Upgrades `expo-` dependencies. The new versions have dropped support for iOS 10; if you are bare workflow and haven't already dropped support for iOS 10, you have two options:
  1. Changing `platform :ios, '10.0'` to `platform :ios, '11.0'` in your Podfile
  2. Use the `resolutions` key in your package.json file to pin the versions of `expo-application`, `expo-device`, and `expo-constants` to their previous major versions.

## 3.1.3 — 2021-03-06

### 🐛 Bug fixes

- Fixed compilation errors on web

## 3.1.2 — 2021-03-05

### 🐛 Bug fixes

- Export `Browser` for Typescript
- Removed `.web` file in favor of one single `Sentry.ts` file
- Fixed Node 12 support for upload sourcmap hook

## 3.1.0 — 2021-02-25

### 🎉 New features

- Auto-configure native projects via `expo/config-plugins`, and EAS Build managed support! You will need to add:

```json
"plugins": ["sentry-expo"]
```to your app.json or app.config.js. This will also auto-configure Sentry for bare workflow projects when you run `expo eject`.

- `sentry-expo` now supports sending sessions data. See Sentry's [Release Health docs to learn more](https://docs.sentry.io/product/releases/health/).

### 🐛 Bug fixes

- Rewrite all frame filenames that are not `[native code]` in managed workflow
- Removed the `.expo` extension in favor of `Constants.executionEnvironment`

## 3.0.5 — 2021-01-27

### 🐛 Bug fixes

- Fixed an issue for iOS on `pod install`- 'CocoaPods could not find compatible versions for pod "EXDevice" and "EXConstants"' by pinning `expo-constants`to v^9, and `expo-device` to v^2

## 3.0.4 — 2020-12-04

### 🐛 Bug fixes

- Upgraded underlying `@sentry/react-native` library from 1.9.0 to 2.1.0
- Fixed an issue in the bare workflow where sourcemaps were not unobfuscated after an over the air update - [#157](https://github.com/expo/sentry-expo/pull/157)

## 3.0.3 — 2020-10-28

### 🐛 Bug fixes

- Fixed an issue in the bare workflow where Sentry would be disabled if the app hadn't received an OTA Update yet - [#155](https://github.com/expo/sentry-expo/pull/155)
- Fixed an issue in the bare workflow where `dist` option wouldn't be used when you explicitly passed it in - [#154](https://github.com/expo/sentry-expo/pull/154)
- Upgrade `expo-updates` to v0.3.5 - [#153](https://github.com/expo/sentry-expo/pull/153)

## 3.0.0 — 2020-09-16

### 🛠 Breaking changes

- Exports from `@sentry/react-native` or `@sentry/browser` are now namespaced.

  ```js
import { Native, Browser } from 'sentry-expo';

  const { ReactNativeClient } = Native;
const { Transports } = Browser;
```- The iOS sourcemap files' names were changed from `main.ios.bundle` and `main.ios.map` to `main.jsbundle` and `main.jsbundle.map`, respectively. This matches the filenames created in the bare workflow during [no publish builds](https://github.com/expo/sentry-expo#configure-no-publish-builds). This only affects you if you were manually generating & uploading sourcemaps to Sentry, rather than relying on `expo publish` or `expo export`. [#129](https://github.com/expo/sentry-expo/pull/129)
- The Android sourcemap files' names were changed from `main.android.bundle` and `main.android.map` to `index.android.bundle` and `index.android.bundle.map`, respectively. This matches the filenames created in the bare workflow during [no publish builds](https://github.com/expo/sentry-expo#configure-no-publish-builds). This only affects you if you were manually generating & uploading sourcemaps to Sentry, rather than relying on `expo publish` or `expo export`. [#130](https://github.com/expo/sentry-expo/pull/130)
- `sentry-expo` now sets your release's `distribution` automatically, defaulting to your app's `version` (`version` in app.json) but can be overriden with `distribution` in the `postPublish` hooks config, or the `SENTRY_DIST` environment variable. If you override the `distribution`, make sure you pass the same value to `dist` in your call to `Sentry.init()`. [#136](https://github.com/expo/sentry-expo/pull/136)
- upgraded to `@sentry/react-native` 1.7.1 [#136](https://github.com/expo/sentry-expo/pull/136)

### 🎉 New features

- Expo Web support: no changes needed!

### 🐛 Bug fixes

- You can now pass a function to the `integrations` option for `init()` which will receive all the default Sentry and sentry-expo integrations, here's an example on how to use it:

  ```js
  Sentry.init(
    ...
    integrations: (integrations) => {
      let filteredIntegrations = integrations.filter(
        (i) => i.name !== "SomeIntegrationNameYouDontWant"
      );
      return filteredIntegrations;
    }
  )
```- Fixed tags with invalid values. ([#137](https://github.com/expo/sentry-expo/pull/137) by [@RodolfoGS](https://github.com/RodolfoGS))

## 2.1.2 — 2020-06-05

- pin `@sentry/react-native` to v1.4.2 to prevent native calls

## 2.1.1 — 2020-06-05

### 🎉 New features

- Added option to configure commits with `SENTRY_SET_COMMITS` env var
- Added option to configure deploy environment with `SENTRY_DEPLOY_ENV` env var

## 2.1.0 — 2020-06-04

### 🛠 Breaking changes

### 🎉 New features

- Added option to manually set release name instead of relying on `manifest.revisionId`
- Added option to associate git commits to a particular release
- Sourcemaps now come with the project root stripped from the path (no more personal paths in your Sentry dashboard!!)

### 🐛 Bug fixes

- Upgrade `@sentry/react-native` to 1.3.9
- Fixed accidental calls to the native SDK that resulted in:
`Sentry Logger [Log]: Failed to get device context from native: SentryError: Native Client is not available, can't start on native.`
- Fixed bug where Android device model name wasn't being added to context.
```
