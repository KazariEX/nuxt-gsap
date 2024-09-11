import gsap from "gsap";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("gsap", {
        mounted(el, binding) {
            const modifiers = Object.keys(binding.modifiers);
            const method = modifiers[0];
            if (!method) {
                console.error(`[GSAP] The v-gsap directive requires at least one modifier.`);
                return;
            }

            const val = binding.value;
            switch (method) {
                case "from":
                    return gsap.from(el, val);
                case "to":
                    return gsap.to(el, val);
                case "fromTo":
                    return gsap.fromTo(el, val[0], val[1]);
            }

            const effect = modifiers[modifiers[0] === "effect" ? 1 : 0];
            if (effect in gsap.effects) {
                gsap.effects[effect](el, val);
            }
            else {
                console.error(`[GSAP] The effect named "${effect}" has not been registered yet.`);
            }
        }
    });
});