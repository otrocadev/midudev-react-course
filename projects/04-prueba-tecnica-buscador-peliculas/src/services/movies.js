export const getMovies = async ({ query }) => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const SEARCH_ENDPOINT = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`

  if (query === '') return null
  try {
    const response = await fetch(SEARCH_ENDPOINT)
    const json = await response.json()
    const movies = json.Search

    const moviesData = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      type: movie.Type,
      year: movie.Year,
      poster: movie.Poster,
    }))

    return moviesData
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
