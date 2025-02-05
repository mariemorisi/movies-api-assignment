<template>
  <div class="movies-list">
    <div class="movies-list_grid">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import MovieCard from './MovieCard.vue'

const props = defineProps(['movies'])
</script>
<style scoped>
@import '../design-tokens/tokens.css';
.movies-list {
  padding: var(--spacing-x-medium);
  max-width: 1200px;
  min-width: 80vw;
}

.movies-list_grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--spacing-medium);
}

@media (min-width: 1400px) {
  .movies-list_grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .movies-list_grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1199px) {
  .movies-list_grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 770px) {
  .movies-list_grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .movies-list_grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .movies-list_grid > * {
    margin: 0 auto;
  }
}
</style>
