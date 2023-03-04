export default function composablesResolver (name) {
    const isCompositionApi = name.startsWith("use");
    if (isCompositionApi) {
        return `@/composables/${name}.js`;
    }
}