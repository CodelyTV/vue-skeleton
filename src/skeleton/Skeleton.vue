<script setup lang="ts">
import { useSkeleton } from './use-skeleton'
import { skeletonProps } from './Skeleton'

const props = defineProps(skeletonProps)

const { elements, className } = useSkeleton(props)
</script>

<template>
  <template v-for="element, index in elements" :key="index">
    <span class="skeleton" :class="className" :style="element.style">
      &zwnj;
    </span>
    <br v-if="!props.inline">
  </template>
</template>

<style scoped>
.skeleton {
  --base-color: #ebebeb;
  --highlight-color: #f5f5f5;
  --animation-duration: 1.5s;
  --animation-direction: normal;
  --pseudo-element-display: block; /* Enable animation */

  background-color: var(--base-color);

  width: 100%;
  border-radius: 0.25rem;
  display: inline-flex;
  line-height: 1;

  position: relative;
  overflow: hidden;
  z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */
}

.skeleton:after {
  content: ' ';
  display: var(--pseudo-element-display);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      90deg,
      var(--base-color),
      var(--highlight-color),
      var(--base-color)
  );
  transform: translateX(-100%);

  animation-name: skeleton;
  animation-direction: var(--animation-direction);
  animation-duration: var(--animation-duration);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes skeleton {
  100% {
      transform: translateX(100%);
  }
}
</style>
