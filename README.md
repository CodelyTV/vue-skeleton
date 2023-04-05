<div align="center">    
    <h1 align="center">Vue Skeleton</h1>
    <p align="center">
        Make beautiful, animated loading skeletons that automatically adapt to your app.
    </p>
    <p align="center">
        This is a Vue port for <a href="https://github.com/dvtng/react-loading-skeleton" target="_blank">react-loading-skeleton</a>
    </p>
    <p align="center">
        <a href="https://github.com/codelytv/vue-skeleton/actions/workflows/ci.yml">
            <img alt="CI" src="https://github.com/codelytv/vue-skeleton/actions/workflows/ci.yml/badge.svg" />
        </a>
    </p>
</div>

## Installation

```bash
# npm
npm install @codelytv/vue-skeleton
```

## Usage

```vue
<script setup lang="ts">
import { Skeleton } from '@codelytv/vue-skeleton'
</script>

<template>
  <Skeleton /> // Simple, single-line loading skeleton
  <Skeleton :count="5" /> // Five-line loading skeleton
</template>
```

## Principles

### Adapts to the styles you have defined

The `Skeleton` component should be used directly in your components in place of content that is loading. While other libraries require you to meticulously craft a skeleton screen that matches the font size, line height, and margins of your content, the `Skeleton` component is automatically sized to the correct dimensions.

For example:

```vue
<script setup lang="ts">
import { Skeleton } from '@codelytv/vue-skeleton'

const props = defineProps<{
  title?: string;
  body?: string;
}>()
</script>

<template>
  <div>
    <h1 v-if="props.title">
      {{ props.title }}
    </h1>
    <Skeleton v-else />

    <template v-if="props.body">
      {{ props.body }}
    </template>
    <Skeleton v-else :count="10" />
  </div>
</template>
```

...will produce correctly-sized skeletons for the heading and body without any further configuration.

This ensures the loading state remains up-to-date with any changes to your layout or typography.

### Don't make dedicated skeleton screens

Instead, make components with _built-in_ skeleton states.

This approach is beneficial because:

1. It keeps styles in sync.
2. Components should represent all possible states — loading included.
3. It allows for more flexible loading patterns. In the blog post example above, it's possible to have the title load before the body, while having both pieces of content show loading skeletons at the right time.

## Theming

Customize individual skeletons with props, or render a `SkeletonTheme` to style all skeletons below it in the Vue hierarchy:

```vue
<script setup lang="ts">
import { Skeleton, SkeletonTheme } from '@codelytv/vue-skeleton'
</script>

<template>
  <SkeletonTheme base-color="#202020" highlight-color="#444">
    <p>
      <Skeleton count="{3}" />
    </p>
  </SkeletonTheme>
</template>
```

## Props Reference

### `Skeleton` only

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>count?: number</code></td>
            <td>
                The number of lines of skeletons to render. If 
                <code>count</code> is a decimal number like 3.5,
                three full skeletons and one half-width skeleton will be
                rendered.
            </td>
            <td><code>1</code></td>
        </tr>
        <tr>
            <td><code>circle?: boolean</code></td>
            <td>
                Makes the skeleton circular by setting <code>border-radius</code> to
                <code>50%</code>.
            </td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td><code>className?: string</code></td>
            <td>
                A custom class name for the individual skeleton elements which is used
                alongside the default class, <code>vue-skeleton</code>.
            </td>
            <td></td>
        </tr>        
        <tr>
            <td><code>style?: Vue.CSSProperties</code></td>
            <td>
                This is an escape hatch for advanced use cases and is not the preferred
                way to style the skeleton. Props (e.g. <code>width</code>,
                <code>borderRadius</code>) take priority over this style object.
            </td>
            <td></td>
        </tr>
    </tbody>
</table>

### `Skeleton` and `SkeletonTheme`

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>baseColor?: string</code></td>
            <td>The background color of the skeleton.</td>
            <td><code>#ebebeb</code></td>
        </tr>
        <tr>
            <td><code>highlightColor?: string</code></td>
            <td>The highlight color in the skeleton animation.</td>
            <td><code>#f5f5f5</code></td>
        </tr>
        <tr>
            <td><code>width?: string | number</code></td>
            <td>The width of the skeleton.</td>
            <td><code>100%</code></td>
        </tr>
        <tr>
            <td><code>height?: string | number</code></td>
            <td>The height of each skeleton line.</td>
            <td>The font size</td>
        </tr>
        <tr>
            <td><code>borderRadius?: string | number</code></td>
            <td>The border radius of the skeleton.</td>
            <td><code>0.25rem</code></td>
        </tr>
        <tr>
            <td><code>inline?: boolean</code></td>
            <td>
                By default, a <code>&lt;br /&gt;</code> is inserted after each skeleton so
                that each skeleton gets its own line. When <code>inline</code> is true, no
                line breaks are inserted.
            </td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td><code>duration?: string | number</code></td>
            <td>The length of the animation in seconds.</td>
            <td><code>1.5</code></td>
        </tr>
        <tr>
            <td><code>direction?: 'ltr' | 'rtl'</code></td>
            <td>
                The direction of the animation, either left-to-right or right-to-left.
            </td>
            <td><code>'ltr'</code></td>
        </tr>
        <tr>
            <td><code>noAnimate?: boolean</code></td>
            <td>
                Whether the animation should disabled. The skeleton will be a solid color when
                this is <code>true</code>. You could use this prop to stop the animation
                if an error occurs.
            </td>
            <td><code>false</code></td>
        </tr>
    </tbody>
</table>


## Thanks

Thanks to the project which this component is based on: [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)
