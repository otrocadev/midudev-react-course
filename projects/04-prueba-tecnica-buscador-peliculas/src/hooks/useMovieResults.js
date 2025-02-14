import { useState, useRef } from 'react'
import { getMovies } from '../services/movies'

export default function useMovieResults({ query }) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(query)

  const searchMovies = async () => {
    if (query === previousSearch.current) return
    previousSearch.current = query
    const newMovies = await getMovies({ query })
    setMovies(newMovies)
  }

  return { movies, searchMovies }
}
