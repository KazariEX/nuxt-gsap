export type BundledPlugins = Record<string, {
    club?: boolean;
    path?: string;
}>;

export const bundledPlugins: BundledPlugins = {
    /* Free */
    CSSPlugin: {
    },
    CSSRulePlugin: {
    },
    CustomEase: {
    },
    Draggable: {
    },
    EaselPlugin: {
    },
    EasePack: {
    },
    /* EasePack start */
    ExpoScaleEase: {
        path: "/EasePack"
    },
    RoughEase: {
        path: "/EasePack"
    },
    SlowMo: {
        path: "/EasePack"
    },
    /* EasePack end */
    Flip: {
    },
    MotionPathPlugin: {
    },
    Observer: {
    },
    PixiPlugin: {
    },
    ScrollToPlugin: {
    },
    ScrollTrigger: {
    },
    TextPlugin: {
    },
    /* Club */
    CustomBounce: {
        club: true
    },
    CustomWiggle: {
        club: true
    },
    DrawSVGPlugin: {
        club: true
    },
    GSDevTools: {
        club: true
    },
    InertiaPlugin: {
        club: true
    },
    MorphSVGPlugin: {
        club: true
    },
    MotionPathHelper: {
        club: true
    },
    Physics2DPlugin: {
        club: true
    },
    PhysicsPropsPlugin: {
        club: true
    },
    ScrambleTextPlugin: {
        club: true
    },
    SplitText: {
        club: true
    }
};