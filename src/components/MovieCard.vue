<template>
  <div class="movie-card">
    <div class="movie-card_img-container">
      <div :style="getPosterStyle(movie)" class="movie-card_img"></div>
      <div class="movie-card_overlay">
        <p class="movie-card_description">{{ movie.description }}</p>
      </div>
    </div>
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
  position: relative;
}

.movie-card_img-container {
  position: relative;
  width: 180px;
  height: 190px;
}

.movie-card_img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-medium);
  margin-bottom: 10px;
  background-color: #f5f5f5bc;
  transition: transform 0.3s ease-in-out;
}

.movie-card_overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 10px;
  text-align: center;
  border-radius: var(--radius-medium);
}

.movie-card_img-container:hover .movie-card_overlay {
  opacity: 1;
}

.movie-card_title {
  font-size: 0.7rem;
  font-weight: bold;
  margin-top: 10px;
}

.movie-card_rating {
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: var(--spacing-small);
}

.movie-card_description {
  font-size: 0.7rem;
  line-height: 1.4;
  max-width: 90%;
  text-align: center;
}

@media (max-width: 600px) {
  .movie-card {
    width: 100px;
    margin-bottom: 20px !important;
  }

  .movie-card_img-container {
    width: 100px;
    height: 120px;
  }
  .movie-card_overlay {
    display: none;
  }
}
</style>
