const path = require('path');

/**
 * Returns a resolver that maps requests to vue components to their respective file paths.
 * @param {string} rootDir The root directory of the project.
 * @param {string} componentDir The directory that contains the vue components.
 * @returns {function} The resolver function.
 */
function componentResolver(rootDir, componentDir) {
  const componentPath = path.resolve(rootDir, componentDir);

  return function (requestPath) {
    if (
      requestPath.startsWith(`@/${componentDir}/`) ||
      requestPath.startsWith(`~/${componentDir}/`)
    ) {
      const relativePath = requestPath.replace(/^@\/|~\//, '');
      return path.join(componentPath, relativePath).replace(/\.vue$/, '');
    }

    return null;
  };
}

module.exports = componentResolver;
