<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

const msg = ref('Welcome to Your Vue.js + TypeScript App')
</script>

<template>
  <h1>Home</h1>
  <HelloWorld :msg="msg" />
</template>
