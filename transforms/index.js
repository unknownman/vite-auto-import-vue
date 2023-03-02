// /src/auto-import/transforms/template.js

import { toPascalCase } from './index';

export default function transformTemplate(code, id) {
  const layout = code.match(/<template[^>]+layout="([^"]+)"/);

  if (layout) {
    const layoutPath = `@/layouts/${toPascalCase(layout[1])}`;
    code = code.replace(/<template[^>]+layout="([^"]+)"/, '<template');
    code = `import ${JSON.stringify(layoutPath)};\n${code}`;
  }

  return code;
}
