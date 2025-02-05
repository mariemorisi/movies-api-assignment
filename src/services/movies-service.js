const API_URL = 'https://november7-730026606190.europe-west1.run.app/movies/?skip=0&limit=35'

export async function fetchMovies() {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.log('Error fetching movies:', error)
    throw error
  }
}
