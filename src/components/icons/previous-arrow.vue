<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16px"
    viewBox="0 -960 960 960"
    width="16px"
    :fill="getColor"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <path d="M384-96 0-480l384-384 68 68-316 316 316 316-68 68Z" />
  </svg>
</template>

<script setup>
import { ref, computed } from 'vue'

const hover = ref(false)
const getColor = computed(() => (hover.value ? 'var(--color-yellow)' : 'var(--color-black)'))
</script>
