import { addImports, addPlugin, addPluginTemplate, createResolver, defineNuxtModule } from "@nuxt/kit";
import { name, version } from "../package.json";
import { bundledPlugins } from "./shared";

export interface ModuleOptions {
    plugins?: (keyof typeof bundledPlugins)[];
    trial?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name,
        version,
        configKey: "gsap"
    },
    defaults: {
        plugins: [],
        trial: false
    },
    setup(options, nuxt) {
        const resolver = createResolver(import.meta.url);

        addImports({
            name: "useGsap",
            from: resolver.resolve("./runtime/utils")
        });

        addPlugin(resolver.resolve("./runtime/v-gsap"));

        const importPlugins = options.plugins?.filter((name) => name in bundledPlugins) || [];

        addPluginTemplate({
            filename: "gsap-plugins.ts",
            write: true,
            getContents: () => /* JS */`
import { defineNuxtPlugin } from "#app";
${importPlugins.map((name) => {
    const item = bundledPlugins[name];
    return `import { ${name} } from "gsap${options.trial ? "-trial" : ""}${item.path ?? `/${name}`}";\n`;
}).join("")}
export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.browser) {
        const gsap = useGsap();
        gsap.registerPlugin(${importPlugins.join()});
    }
});
`
        });
    }
});