export default function createAliasResolver({ root, srcDir, alias = {} }) {
  const defaultAlias = {
    '@': path.resolve(root, srcDir),
    '~': path.resolve(root),
  };

  const aliasConfig = { ...defaultAlias, ...alias };

  return (name) => {
    if (name in aliasConfig) {
      return aliasConfig[name];
    }
    return null;
  };
}
