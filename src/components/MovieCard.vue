<template>
  <div class="movie-card">
    <img :src="movie.image_url" :alt="movie.title" class="movie-card_img" />
    <p>{{ movie.title }}</p>
    <p>{{ movie.rating }}</p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps(['movie'])
</script>
<style>
.movie-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  width: 200px;
}

.movie-card_img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
