const path = require('path');
const { toPascalCase } = require('./transforms/index.js');
const { componentResolver, layoutResolver } = require('./resolves/index.js');

/**
 * Auto import vue component and layout using their file path.
 * @param {*} options The options to configure auto import plugin.
 */
function autoImportVue(options = {}) {
  const {
    baseDir = 'src',
    componentDir = 'components',
    layoutDir = 'layouts',
    alias = {},
  } = options;
  const rootDir = path.resolve(baseDir);

  return {
    name: 'auto-import-vue',
    configureServer(server) {
      const moduleAliases = { ...alias };

      // Register all aliases defined in `resolves/alias.js`.
      Object.entries(require('./resolves/alias.js')).forEach(
        ([aliasName, aliasPath]) => {
          moduleAliases[aliasName] = path.resolve(rootDir, aliasPath);
        }
      );

      // Register all resolvers defined in `resolves/index.js`.
      const resolvers = [
        componentResolver(rootDir, componentDir),
        layoutResolver(rootDir, layoutDir),
      ];
      require('./resolves/index.js').forEach(({ name, resolver }) => {
        resolvers.push(resolver(rootDir));
      });

      server.middlewares.use((req, res, next) => {
        for (const resolver of resolvers) {
          const resolvedPath = resolver(req.path);
          if (resolvedPath) {
            req.url = resolvedPath;
            break;
          }
        }
        next();
      });
    },
    transform(code, id) {
      if (!id.endsWith('.vue')) {
        return null;
      }

      return {
        code: `import ${toPascalCase(
          path.basename(id, '.vue')
        )} from "${id}"\nexport default ${toPascalCase(
          path.basename(id, '.vue')
        )}`,
      };
    },
  };
}

module.exports = autoImportVue;
