export default defineNuxtConfig({
    ssr: false,
    devtools: {
        enabled: true
    },
    modules: [
        "../src/module"
    ],
    gsap: {
        trial: true,
        plugins: [
            "CSSPlugin",
            "CSSRulePlugin",
            "CustomBounce",
            "CustomEase",
            "CustomWiggle",
            "Draggable",
            "DrawSVGPlugin",
            "EasePack",
            "EaselPlugin",
            "ExpoScaleEase",
            "Flip",
            "GSDevTools",
            "InertiaPlugin",
            "MorphSVGPlugin",
            "MotionPathHelper",
            "MotionPathPlugin",
            "Observer",
            "Physics2DPlugin",
            "PhysicsPropsPlugin",
            "PixiPlugin",
            "RoughEase",
            "ScrambleTextPlugin",
            "ScrollToPlugin",
            "ScrollTrigger",
            "SlowMo",
            "SplitText",
            "TextPlugin"
        ]
    }
});