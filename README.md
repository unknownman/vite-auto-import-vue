# vite-auto-import-vue
a lightweight Vite plugin for auto importing Vue components and layouts

## Installation
Install the package via npm:
```sh
npm install vite-auto-import-vue --save-dev
```

## Usage
Add the plugin to your `vite.config.js`:
```js
import autoImport from 'vite-auto-import-vue';

export default {
  plugins: [
    autoImport(),
  ],
};
```

## Options
The following options can be passed to the plugin:

- `baseLayoutDir`: Directory containing layout files (default: `src/layouts`).

## Inertia.js
This plugin is especially suitable for use with [Inertia.js](https://inertiajs.com/) and [Vite](https://vitejs.dev/).

To use this plugin with Inertia.js, create a layout file for your Inertia.js pages and add it to the `baseLayoutDir` directory. For example, create a file called `src/layouts/app.vue` with the following content:

```html
<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  components: {
    // add additional components
  },
  // add additional statements
};
</script>
```

## Author
- áliJoder

## License
MIT
