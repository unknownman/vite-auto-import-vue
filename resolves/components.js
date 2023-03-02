// This file exports a function that resolves a URL to a component path.

import { join } from 'path';
import { toPascalCase } from '../transforms/index.js';

export default async function componentResolver(url, options) {
  const { baseComponentDir } = options;

  // Check if the URL is a Vue component.
  if (!url.endsWith('.vue')) {
    return null;
  }

  // Get the component name from the URL.
  const name = url.split('/').slice(-1)[0].replace('.vue', '');

  // Convert the component name to PascalCase.
  const pascalName = toPascalCase(name);

  // Construct the path to the component.
  const path = join(baseComponentDir, pascalName, 'index.vue');

  return path;
}
