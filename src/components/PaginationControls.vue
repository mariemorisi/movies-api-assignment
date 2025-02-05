<template>
  <div>
    <button @click="emit('onPageChange', currentPage - 1)" :disabled="currentPage === 1">
      Previous
    </button>
    {{ currentPage }} / {{ totalPages }}
    <button @click="emit('onPageChange', currentPage + 1)" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['currentPage', 'totalPages'])

const emit = defineEmits('onPageChange')
</script>
<style></style>
