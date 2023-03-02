// This file exports a function that applies all resolver functions to a URL.

import componentResolver from './component.js';
import layoutResolver from './layout.js';
import aliasResolver from './alias.js';

export async function applyResolvers(url, options) {
  const resolvers = [componentResolver, layoutResolver, aliasResolver];
  for (const resolver of resolvers) {
    const resolved = await resolver(url, options);
    if (resolved) {
      return resolved;
    }
  }
  return null;
}
