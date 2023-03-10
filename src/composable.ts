export default function composablesResolver (name, options) {
    const isCompositionApi = name.startsWith("use");
    if (isCompositionApi) {
        return `@/composables/${name}.js`;
    }
}