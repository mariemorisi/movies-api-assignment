<template>
  <main class="home-view">
    <MoviesList :movies="movies" />
  </main>
</template>
<script setup>
import MoviesList from '../components/MoviesList.vue'
import { onMounted, ref } from 'vue'
import { fetchMovies } from '../services/movies-service'

const movies = ref([])
const loading = ref(false)
const currentPage = ref(1)
const itemsPerPage = ref(10)

onMounted(async () => {
  await getMoviesList()
})

const getMoviesList = async () => {
  loading.value = true
  const response = await fetchMovies()
  movies.value = response.items
  loading.value = false
}
</script>
<style scoped>
.home-view {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
