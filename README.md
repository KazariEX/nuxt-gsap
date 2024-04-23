# nuxt-gsap

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[GSAP][gsap-href] module for [Nuxt][nuxt-href].

## Features

- Vue directive that can be easily used.
- Automatically registers plugins.

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @zinkawaii/nuxt-gsap
```

That's it! You can now use nuxt-gsap in your Nuxt app ✨

## Options

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@zinkawaii/nuxt-gsap"],
  gsap: {
    /* gsap options */
  }
});
```

- ``trial``: boolean

  Imports plugins from "gsap-trial" instead of "gsap".

- ``plugins``: string[]

  List of plugin names to import.

## Directives

### ``v-gsap``

``v-gsap`` provides a set of convenient shortcuts for invoking GSAP methods on DOM elements.

```vue
<div v-gsap.to="{ /* Options */ }"/>
```

is same as:

```vue
<script lang="ts" setup>
  const gsap = useGsap();

  onMounted(() => {
    gsap.to(".box", { /* Options */ });
  });
</script>

<template>
  <div class="box"></div>
</template>
```

The available built-in modifiers also include "from" and "fromTo".

Additionally, it is also possible to invoke registered effects.

```vue
<script lang="ts" setup>
  const gsap = useGsap();
  gsap.registerEffect({
    name: "rotate",
    effect(targets, config) {
      return gsap.to(targets, { rotate: 360, ease: "linear", duration: 1.5, repeat: -1, ...config });
    }
  });
</script>

<template>
  <div v-gsap.rotate="{ /* Options */ }"></div>
  <div v-gsap.rotate></div> <!-- use default options -->
</template>
```

## Utils

### ``useGsap()``

Return the global GSAP instance.

```ts
const gsap = useGsap();
```

## Contribution

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@zinkawaii/nuxt-gsap/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@zinkawaii/nuxt-gsap

[npm-downloads-src]: https://img.shields.io/npm/dm/@zinkawaii/nuxt-gsap.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@zinkawaii/nuxt-gsap

[license-src]: https://img.shields.io/npm/l/@zinkawaii/nuxt-gsap.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@zinkawaii/nuxt-gsap

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com

[gsap-href]: https://gsap.com