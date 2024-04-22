import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";
import { name } from "../package.json";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name,
        configKey: "gsap"
    },
    // Default configuration options of the Nuxt module
    defaults: {},
    setup(_options, _nuxt) {
        const resolver = createResolver(import.meta.url);

        // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
        addPlugin(resolver.resolve("./runtime/plugin"));
    }
});