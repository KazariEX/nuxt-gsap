<script setup>
    const gsap = useGsap();

    gsap.registerEffect({
        name: "rotate",
        effect(targets, config) {
            return gsap.to(targets, { rotate: 360, ease: "linear", duration: 1.5, repeat: -1, ...config });
        }
    });

    gsap.registerEffect({
        name: "fade",
        effect(targets, config) {
            return gsap.to(targets, { duration: 1.5, opacity: 0, ...config });
        }
    });

    gsap.registerEffect({
        name: "slide-in",
        effect(targets, config) {
            return gsap.from(targets, { x: -360, duration: 1.5, opacity: 0, ...config });
        }
    });
</script>

<template>
    <div class="demo">
        <img v-gsap.to="{ rotate: 360, opacity: 1, repeat: -1 }" src="~/assets/nuxt.svg"/>
        <img v-gsap.rotate src="~/assets/nuxt.svg"/>
        <img v-gsap.slide-in src="~/assets/nuxt.svg"/>
        <img v-gsap.fade="{ duration: 3 }" src="~/assets/nuxt.svg"/>
        <img v-gsap.fade src="~/assets/nuxt.svg"/>
    </div>
</template>

<style>
    .demo {
        display: grid;
        grid-template-rows: repeat(5, 128px);
        justify-content: center;
        align-items: center;
    }
</style>