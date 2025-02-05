import { useState, useEffect } from 'react'
import { getFact } from '../services/fact'

export function useCatFact() {
  const [fact, setFact] = useState(null)

  const refreshFact = async () => {
    const newFact = await getFact()
    setFact(newFact)
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
