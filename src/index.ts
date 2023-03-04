
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import layoutTransform from "./layout"
import composablesResolver from "./composable"
import { pascalCaseToDashCase, checkComponentFilePath } from "./util"
import { info } from "./log"
import { normalizePath } from "vite";
import fs from "fs"
import chalk from "chalk"


export default function vitePluginVueAutoImport (options) {
    options = Object.assign({
        base: "",
        components: ['components'],
        layouts: ['layouts'],
        composables: ['composables'],
        srcAlias: "@"
    }, options)

    return [
        AutoImport({
            imports: ["vue"],
            resolvers: [composablesResolver],
            vueTemplate: true,
        }),
        layoutTransform(options),
        Components({
            resolvers: [
                (componentName) => {
                    info('a new component detected', pascalCaseToDashCase(componentName))
                    const componentFilePath = checkComponentFilePath(componentName, options)
                    if (componentFilePath)
                        return { from: componentFilePath };
                },
            ],
        }),
    ]
}