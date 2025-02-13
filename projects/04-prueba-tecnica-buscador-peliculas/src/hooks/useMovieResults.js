import { useState } from 'react'
import { getMovies } from '../services/movies'

export default function useMovieResults({ query }) {
  const [movies, setMovies] = useState([])

  const searchMovies = async () => {
    const newMovies = await getMovies({ query })
    setMovies(newMovies)
  }

  return { movies, searchMovies }
}
