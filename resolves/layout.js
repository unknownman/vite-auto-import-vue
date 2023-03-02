// This file exports a function that resolves a URL to a layout path.

import { join } from 'path';

export default async function layoutResolver(url, options) {
  const { baseLayoutDir } = options;

  // Check if the URL is a layout URL.
  if (!url.startsWith('~/')) {
    return null;
  }

  // Get the layout name from the URL.
  const name = url.slice(2);

  // Construct the path to the layout.
  const path = join(baseLayoutDir, `${name}.vue`);

  return path;
}
