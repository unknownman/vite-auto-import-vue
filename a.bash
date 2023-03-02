#!/bin/bash

echo "# vite-auto-import-vue" > README.md
echo "a lightweight Vite plugin for auto importing Vue components and layouts" >> README.md
echo "" >> README.md

echo "## Installation" >> README.md
echo "Install the package via npm:" >> README.md
echo "\`\`\`sh" >> README.md
echo "npm install vite-auto-import-vue --save-dev" >> README.md
echo "\`\`\`" >> README.md
echo "" >> README.md

echo "## Usage" >> README.md
echo "Add the plugin to your \`vite.config.js\`:" >> README.md
echo "\`\`\`js" >> README.md
echo "import autoImport from 'vite-auto-import-vue';" >> README.md
echo "" >> README.md
echo "export default {" >> README.md
echo "  plugins: [" >> README.md
echo "    autoImport()," >> README.md
echo "  ]," >> README.md
echo "};" >> README.md
echo "\`\`\`" >> README.md
echo "" >> README.md

echo "## Options" >> README.md
echo "The following options can be passed to the plugin:" >> README.md
echo "" >> README.md
echo "- \`baseLayoutDir\`: Directory containing layout files (default: \`src/layouts\`)." >> README.md
echo "" >> README.md

echo "## Inertia.js" >> README.md
echo "This plugin is especially suitable for use with [Inertia.js](https://inertiajs.com/) and [Vite](https://vitejs.dev/)." >> README.md
echo "" >> README.md
echo "To use this plugin with Inertia.js, create a layout file for your Inertia.js pages and add it to the \`baseLayoutDir\` directory. For example, create a file called \`src/layouts/app.vue\` with the following content:" >> README.md
echo "" >> README.md
echo "\`\`\`html" >> README.md
echo "<template>" >> README.md
echo "  <div>" >> README.md
echo "    <slot />" >> README.md
echo "  </div>" >> README.md
echo "</template>" >> README.md
echo "" >> README.md
echo "<script>" >> README.md
echo "export default {" >> README.md
echo "  components: {" >> README.md
echo "    // add additional components" >> README.md
echo "  }," >> README.md
echo "  // add additional statements" >> README.md
echo "};" >> README.md
echo "</script>" >> README.md
echo "\`\`\`" >> README.md
echo "" >> README.md

echo "## Author" >> README.md
echo "- áliJoder" >> README.md
echo "" >> README.md

echo "## License" >> README.md
echo "MIT" >> README.md
