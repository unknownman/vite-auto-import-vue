// This is the main entry point of the Vite plugin.
// It exports a function that returns a Vite plugin object.

import { applyResolvers } from './resolves/index.js';
import { applyTransforms } from './transforms/index.js';

export default function autoImportVue(options = {}) {
  // `options` is an object that allows configuring the plugin.
  // Here, we are setting default values for two options.
  const { baseComponentDir = 'src/components', baseLayoutDir = 'src/layouts' } =
    options;

  return {
    // This function will be called by Vite to apply the plugin.
    // `resolveId` and `transform` are functions provided by Vite.
    async configureServer(server) {
      await server.transformRequest(async (url) => {
        // Apply the resolvers to the URL.
        const resolved = await applyResolvers(url, {
          baseComponentDir,
          baseLayoutDir,
        });
        if (resolved) {
          return { url: resolved };
        }

        // Apply the transforms to the URL.
        const transformed = applyTransforms(url, { baseLayoutDir });
        if (transformed) {
          return { code: transformed, map: null };
        }

        return null;
      });
    },
  };
}
