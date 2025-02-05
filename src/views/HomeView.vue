<template>
  <main class="home-view">
    <div class="home-view_header">
      <h2>Movies</h2>
    </div>
    <div v-if="!loading && !errorFetchingMovies" class="home-view_content">
      <MoviesList :movies="currentPageMovies" />
      <PaginationControls
        :currentPage="currentPage"
        :totalPages="totalPages"
        @onPageChange="handlePageChange"
        class="pagination-controls"
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
const itemsPerPage = ref(12)
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
  min-height: 50vh;
  min-width: 90vw;
  padding: 0 var(--spacing-x-large);
}

.home-view_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-medium);
  padding: 0 var(--spacing-x-large);
  margin-bottom: var(--spacing-large);
}

.home-view_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pagination-controls {
  margin-top: var(--spacing-x-large);
}
</style>
