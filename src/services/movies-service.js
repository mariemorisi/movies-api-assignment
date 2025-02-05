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

export async function getPoster(title) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  }

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
      options,
    )
    if (!res.ok) {
      throw new Error(`Failed to fetch poster: ${res.status} ${res.statusText}`)
    }
    const data = await res.json()
    if (data.results && data.results.length > 0) {
      return 'https://image.tmdb.org/t/p/w500' + data.results[0].poster_path
    }
    return null
  } catch (err) {
    console.error('Error fetching TMDB poster:', err)
    throw err
  }
}

export async function getMoviesWithPosters() {
  const results = await fetchMovies()
  for (const movie of results.items) {
    try {
      movie.image_url = await getPoster(movie.title)
    } catch (err) {
      console.error('Poster error', err)
    }
  }
  return results
}
