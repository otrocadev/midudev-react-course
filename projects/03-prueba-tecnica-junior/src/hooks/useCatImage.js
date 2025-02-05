import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1)
    setImage(`https://cataas.com/cat/says/${firstWord}`)
  }, [fact])

  return { image }
}
