# Vite Auto Import Vue

Vite Auto Import Vue is a slim Vite plugin that automatically imports Vue components, layouts and composables as they are referenced in your code.

## Installation

```sh
npm install vite-auto-import-vue --save-dev
```

## Usage

```js
import vitePluginVueAutoImport from 'vite-auto-import-vue'

export default {
  plugins: [
    vitePluginVueAutoImport({
      // Options here
    })
  ]
}
```

## Options

- `base`: The base path used to resolve component and composables.
- `components`: An array of directories where your components are located.
- `layouts`: The directory where your layout components are located.
- `composables`: An array of directories where your composables are located.
- `srcAlias`: The alias for your `src` directory.
- `verbose`: Whether or not to output logging information.

## Contributing :heart:

Contributions are welcome! Please follow these steps:

1. Fork this repository.
2. Create a new branch with your changes: `git checkout -b my-feature-branch`
3. Commit your changes: `git commit -am 'Added some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Submit a pull request.

### Emoji Key

- :bug: Bug Fix
- :sparkles: New Feature
- :pencil: Docs Update
- :art: Code Style Update
- :recycle: Refactoring
- :test_tube: Testing
- :globe_with_meridians: Internationalization
- :construction_worker: Build System Update
- :rocket: Performance Update

## Roadmap

- [ ] Add support for TypeScript.
- [ ] Implement a better way of handling layout and composables resolution.
- [ ] Add more resolvers to support additional types of imports.

