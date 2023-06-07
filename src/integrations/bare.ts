import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import {
  setExtras,
  setTags,
  getCurrentHub,
  addGlobalEventProcessor,
} from '@sentry/react-native';
import { SeverityLevel } from '@sentry/types';

export class ExpoBareIntegration {
  static id = 'ExpoBareIntegration';
  name = ExpoBareIntegration.id;

  setupOnce() {
    setExtras({
      deviceYearClass: Device.deviceYearClass,
      linkingUri: Constants.linkingUri,
    });

    setTags({
      deviceId: Constants.sessionId,
    });

    const defaultHandler = ErrorUtils.getGlobalHandler();

    ErrorUtils.setGlobalHandler((error, isFatal) => {
      // Updates bundle names are not predictable in advance, so we replace them with the names
      // Sentry expects to be in the stacktrace.
      // The name of the sourcemap file in Sentry is different depending on whether it was uploaded
      // by the upload-sourcemaps script in this package (in which case it will have a revisionId)
      // or by the default @sentry/react-native script.
      if (typeof error.stack === 'string') {
        const sentryFilename = Platform.OS === 'android' ? 'index.android.bundle' : 'main.jsbundle';
        error.stack = error.stack.replace(
          /\/(bundle\-\d+|[\dabcdef]+\.bundle)/g,
          `/${sentryFilename}`
        );
      }

      getCurrentHub().withScope((scope) => {
        if (isFatal) {
          scope.setLevel("fatal" as SeverityLevel);
        }
        getCurrentHub().captureException(error, {
          originalException: error,
        });
      });

      const client = getCurrentHub().getClient();
      // If in dev, we call the default handler anyway and hope the error will be sent
      // Just for a better dev experience
      if (client && !__DEV__) {
        // @ts-ignore PR to add this to types: https://github.com/getsentry/sentry-javascript/pull/2669
        client.flush(client.getOptions().shutdownTimeout || 2000).then(() => {
          defaultHandler(error, isFatal);
        });
      } else {
        // If there is no client, something is fishy but we call the default handler anyway. Even if in dev
        defaultHandler(error, isFatal);
      }
    });

    addGlobalEventProcessor(function (event, _hint) {
      const that = getCurrentHub().getIntegration(ExpoBareIntegration);

      if (that) {
        event.contexts = {
          ...(event.contexts || {}),
          device: {
            simulator: !Device.isDevice,
            model: Device.modelName || undefined,
          },
          os: {
            name: Device.osName || undefined,
            version: Device.osVersion || undefined,
          },
        };
      }

      return event;
    });
  }
}
