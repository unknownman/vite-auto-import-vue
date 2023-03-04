# Vite Auto Import Vue

Vite Auto Import Vue is a slim Vite plugin that automatically imports Vue components, layouts, and composables as they are referenced in your code. :rocket:

## Installation :computer:

```sh
npm install vite-auto-import-vue --save-dev
```

## Usage :hammer_and_wrench:

```js
import vitePluginVueAutoImport from 'vite-auto-import-vue';

export default {
  plugins: [
    vitePluginVueAutoImport({
      // Options here
    }),
  ],
};
```

## Options :gear:

- `base`: The base path used to resolve component and composables. :file_folder:
- `components`: An array of directories where your components are located. :file_folder:
- `layouts`: The directory where your layout components are located. :file_folder:
- `composables`: An array of directories where your composables are located. :file_folder:
- `srcAlias`: The alias for your `src` directory. :file_folder:
- `verbose`: Whether or not to output logging information. :loudspeaker:

## Contributing :heart:

Contributions are welcome! Please follow these steps:

1. Fork this repository.
2. Create a new branch with your changes: `git checkout -b my-feature-branch`
3. Commit your changes: `git commit -am 'Added some feature' :sparkles:`
4. Push to the branch: `git push origin my-feature-branch`
5. Submit a pull request. :rocket:

## Roadmap :pushpin:

- [ ] Add support for TypeScript. :gear:
- [ ] Implement a better way of handling layout and composables resolution. :wrench:
- [ ] Add more resolvers to support additional types of imports. :gear:
