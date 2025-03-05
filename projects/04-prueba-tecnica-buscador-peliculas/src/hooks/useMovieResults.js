import { useState, useRef, useMemo, useCallback } from 'react'
import { getMovies } from '../services/movies'

export default function useMovieResults({ query, sort }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(query)

  const searchMovies = useCallback(async ({ query }) => {
    if (query === previousSearch.current) return
    previousSearch.current = query
    const newMovies = await getMovies({ query })
    setMovies(newMovies)
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, searchMovies }
}
