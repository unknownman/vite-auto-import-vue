import { normalizePath } from "vite";
import fs from "fs"
import chalk from "chalk"
import path from "path";
import { importInfo, warn } from "./log"

export function pascalCaseToDashCase (str) {
    // Convert first character to lowercase
    str = str.charAt(0).toLowerCase() + str.slice(1);
    // Replace uppercase characters with "-{lowercase}"
    str = str.replace(/([A-Z])/g, "-$1").toLowerCase();
    // Remove leading "-" characters
    return str.replace(/^-+/, "");
}

export function checkComponentFilePath (componentName, options) {
    var a = false
    for (const element of options.components) {
        const pathGen = path.resolve(normalizePath(options.base + "/" + element + "/" + pascalCaseToDashCase(componentName).split("-").join("/")))
        if (fileExists(pathGen + ".vue")) {
            const mainFile = pathGen + '.vue'
            importInfo(componentName, mainFile)
            return mainFile
        }
        else if (fileExists(pathGen + "/index.vue")) {
            const mainFile = pathGen + '/index.vue'
            importInfo(componentName, mainFile)
            return mainFile
        }
    }
    warn(`any file wouldnt resolve to ${chalk.bold(componentName)}`)
    return false
}

// Define a function to check if a file exists
export function fileExists (filePath) {
    try {
        // Attempt to read the file
        fs.accessSync(filePath, fs.constants.F_OK);
        return true;
    } catch (error) {
        // Return false if the file doesn't exist or is inaccessible
        return false;
    }
}

