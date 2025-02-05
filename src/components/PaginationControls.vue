<template>
  <div class="pagination-controls">
    <button
      @click="emit('onPageChange', currentPage - 1)"
      :disabled="currentPage === 1"
      class="pagination-button"
    >
      <PreviousArrow />
    </button>
    {{ currentPage }} / {{ totalPages }}
    <button
      @click="emit('onPageChange', currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="pagination-button"
    >
      <NextArrow />
    </button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
import PreviousArrow from './icons/previous-arrow.vue'
import NextArrow from './icons/next-arrow.vue'

const props = defineProps(['currentPage', 'totalPages'])

const emit = defineEmits(['onPageChange'])
</script>
<style>
.pagination-controls {
  display: flex;
  justify-content: center;
  gap: var(--spacing-large);
  margin: var(--spacing-large) 0;
  padding: var(--spacing-small);
  background: #eaecedf6;
  border-radius: var(--radius-large);
  color: rgb(45, 44, 44);
}
.pagination-button {
  border: none;
  border-radius: var(--radius-small);
  padding: var(--spacing-small) var(--spacing-large);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-small);
  background: var(--color-primary);
}

.pagination-button:disabled {
  cursor: not-allowed;
  filter: grayscale(1);
}
</style>
