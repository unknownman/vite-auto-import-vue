/**
 * Converts a string to pascal case.
 *
 * @param {string} str - The string to convert.
 * @returns {string} - The converted string.
 */
export function toPascalCase(str) {
  return str.replace(/(\w)(\w*)/g, function (_, first, rest) {
    return first.toUpperCase() + rest.toLowerCase();
  });
}
