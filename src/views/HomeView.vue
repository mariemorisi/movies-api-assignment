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
    <div v-if="loading" class="home-view_loader"></div>
    <div v-if="errorFetchingMovies" class="home-view_error">
      Something went wrong, please try again
    </div>
  </main>
</template>
<script setup>
import MoviesList from '../components/MoviesList.vue'
import { onMounted, ref, computed } from 'vue'
import { getMoviesWithPosters } from '../services/movies-service'
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
    const response = await getMoviesWithPosters()
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

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
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

.home-view_error {
  color: var(--color-error);
  font-size: var(--font-size-large);
  font-weight: bold;
  text-align: center;
}
.home-view_loader {
  margin: auto;
  margin-top: 50px;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #0000;
  border-right-color: #ffa50097;
  position: relative;
  animation: l24 1s infinite linear;
}
.home-view_loader:before,
.home-view_loader:after {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: inherit;
  animation: inherit;
  animation-duration: 2s;
}
.home-view_loader:after {
  animation-duration: 4s;
}
@keyframes l24 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
