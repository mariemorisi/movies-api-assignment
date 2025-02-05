<template>
  <main class="home-view">
    <div v-if="!loading && !errorFetchingMovies">
      <MoviesList :movies="currentPageMovies" />
      <PaginationControls
        :currentPage="currentPage"
        :totalPages="totalPages"
        @onPageChange="handlePageChange"
      />
    </div>
    <div v-if="loading">Loading</div>
    <div v-if="errorFetchingMovies">Something went wrong, please try again</div>
  </main>
</template>
<script setup>
import MoviesList from '../components/MoviesList.vue'
import { onMounted, ref, computed } from 'vue'
import { fetchMovies } from '../services/movies-service'
import PaginationControls from '@/components/PaginationControls.vue'

const movies = ref([])
const loading = ref(false)
const currentPage = ref(1)
const itemsPerPage = ref(5)
const errorFetchingMovies = ref(false)

onMounted(async () => {
  await getMoviesList()
})

const getMoviesList = async () => {
  loading.value = true
  try {
    const response = await fetchMovies()
    movies.value = response.items
    errorFetchingMovies.value = false
  } catch (error) {
    console.log('erreur')
    console.error(error)
    errorFetchingMovies.value = true
  } finally {
    loading.value = false
  }
}

const currentPageMovies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return movies.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(movies.value.length / itemsPerPage.value)
})

const handlePageChange = (page) => {
  currentPage.value = page
}
</script>
<style scoped>
.home-view {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
}
</style>
