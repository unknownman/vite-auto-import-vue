export default function layoutTransform (options) {
    {
        return {
            name: "vite:inertia:layout",
            transform (code, id) {
                if (!/<template +layout *= *['"](\w+)['"] *>/.test(code)) {
                    return;
                }

                const layouts = "@/layouts/";
                // const debug = createDebugger("vite:inertia:layout");
                const isTypeScript = /lang=['"]ts['"]/.test(code);

                return code.replace(
                    /<template +layout *= *['"](\w+)['"] *>/,
                    (_, layoutName) => {
                        console.log(
                            `Using custom Inertia layout (${layoutName}) for SFC: ${id}`
                        );
                        console.log(
                            `import layout from '${layouts}${layoutName}.vue'`
                        );
                        return `
					<script${isTypeScript ? ' lang="ts"' : ""}>
					import layout from '${layouts}${layoutName}.vue'
					export default { layout }
					</script>
					<template>
				`;
                    }
                );
            },
        };
    }
}
