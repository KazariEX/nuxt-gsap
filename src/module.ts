import { addImports, addPlugin, addPluginTemplate, createResolver, defineNuxtModule } from "@nuxt/kit";
import { name } from "../package.json";
import { bundledPlugins } from "./shared";

export interface ModuleOptions {
    plugins: (keyof typeof bundledPlugins)[];
    trial: boolean;
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name,
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

        const importPlugins = options.plugins.filter((name) => name in bundledPlugins);

        addPluginTemplate({
            filename: "register-plugin.ts",
            write: true,
            getContents: () => /* JS */`
import { defineNuxtPlugin } from "#app";
import gsap from "gsap";
import { ${importPlugins.join()} } from "gsap${options.trial ? "-trial" : ""}/all";

export default defineNuxtPlugin((nuxtApp) => {
    gsap.registerPlugin(${importPlugins.join()});
});
`
        });
    }
});