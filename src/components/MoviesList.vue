<template>
  <div class="movies-list">
    <h1>Movies list</h1>
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
.movies-list {
  padding: 20px;
  max-width: 1200px;
  min-width: 80vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.movies-list_grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

@media (max-width: 900px) {
  .movies-list_grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .movies-list_grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
