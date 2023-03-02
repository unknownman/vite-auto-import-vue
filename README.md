# vite-auto-import-vue
A lightweight Vite plugin for auto importing Vue components and layouts.

## Usage
This plugin is designed to work with Vite and is suitable for use with the Inertia.js framework. To use, install the package from npm:

```sh
npm install vite-auto-import-vue
```

Then add it to your Vite config file:

```js
import autoImportVue from 'vite-auto-import-vue';
export default {
  plugins: [
    autoImportVue(),
  ],
};
```

## Options
This plugin has the following options:

- `baseComponentDir`: The base directory to search for Vue component files. Defaults to `src/components`.
- `baseLayoutDir`: The base directory to search for layout files. Defaults to `src/layouts`.

To configure options, pass an object to the plugin function with the desired options:

```js
autoImportVue({
  baseComponentDir: 'src/my-components',
  baseLayoutDir: 'src/my-layouts',
});
```

## About the Author
This package was developed by áliJoder. You can find more of my work on my [GitHub profile](https://github.com/unknownman).
