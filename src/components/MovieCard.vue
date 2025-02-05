<template>
  <div class="movie-card">
    <div :style="getPosterStyle(movie)" class="movie-card_img" />
    <p class="movie-card_title">{{ movie.title }}</p>
    <p class="movie-card_rating">
      <StarIcon />
      <span>{{ movie.rating }}</span>
    </p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import StarIcon from './icons/star-icon.vue'
const props = defineProps(['movie'])

const getPosterStyle = (movie) => {
  return `background-image: url(${movie.image_url}); background-size: cover; background-position: top`
}
</script>
<style>
.movie-card {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-medium);
  width: 150px;
}

.movie-card_img {
  width: 180px;
  height: 190px;
  border-radius: var(--radius-medium);
  margin-bottom: 10px;
  background-color: #f5f5f5bc;
}

.movie-card_title {
  font-size: 0.7rem;
  font-weight: bold;
  margin-bottom: 5px;
}
.movie-card_rating {
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: var(--spacing-small);
}
</style>
