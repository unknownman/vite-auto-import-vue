import chalk from "chalk"

export function info (message, item) {
    console.log(chalk.hex('#444').bold(message) + "\t" + chalk.bgHex('#444').black(item))
}

export function importInfo (componentName, file) {
    console.log(chalk.bgGreen.black.bold("IMPORT") + "\t\t" + chalk.green(`${chalk.bold(componentName)} ${chalk.gray('import dynamicaly file :')} \n\t\t ${chalk.dim.bold(file)}`) + "\n")
}

export function warn (message) {
    console.log(chalk.bgYellow.black.bold("WARN!") + "\t\t" + chalk.red(message) + "\n")
}