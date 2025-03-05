import { useCallback, useState } from 'react'
import './App.css'
import RenderMovies from './components/RenderMovies'
import useMovieResults from './hooks/useMovieResults'
import useSearch from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { query, error, setQuery, handleErrors, resetError } = useSearch()
  const { movies, searchMovies } = useMovieResults({ query, sort })

  const debounceSearch = useCallback(
    debounce((query) => {
      searchMovies({ query })
    }, 500),
    [searchMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    handleErrors()
    if (!error) searchMovies({ query })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    debounceSearch(newQuery)
    resetError()
  }

  return (
    <div>
      <header>
        <h1>Movie finder 🔎</h1>
        <form onSubmit={handleSubmit}>
          <label>What movie are you looking for?</label>
          <div className="search-input">
            <input
              onChange={handleChange}
              value={query}
              type="text"
              placeholder="Indiana Jones and the Lost Arch"
            />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button>Buscar</button>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <RenderMovies movies={movies} />
      </main>
    </div>
  )
}

export default App
