<script setup lang="ts">
import { computed, provide } from 'vue';
import { skeletonThemeProps, SkeletonThemePropsKey } from './Skeleton';

const props = defineProps(skeletonThemeProps);

provide(
  SkeletonThemePropsKey,
  computed(() => ({ ...props }))
);
</script>

<template>
  <slot />
</template>
