import { useState } from 'react'

export default function useSearch() {
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  const handleErrors = () => {
    if (query === '') {
      setError('The search cannot be empty')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('The search cannot be only numbers')
      return
    }
    setError(null)
  }

  const resetError = () => {
    setError(null)
  }

  return { query, error, setQuery, handleErrors, resetError }
}
