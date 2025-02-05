import { useEffect, useState } from 'react'
import { getFact } from './services/fact'
import './App.css'

function useCatImage({ fact }) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1)
    setImage(`https://cataas.com/cat/says/${firstWord}`)
  }, [fact])

  return { image }
}

export function App() {
  const [fact, setFact] = useState(null)
  const { image } = useCatImage({ fact })

  useEffect(() => {
    handleClick()
  }, [])

  const handleClick = async () => {
    const newFact = await getFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <p className="fact_text">{fact}</p>}
        <img
          src={image}
          alt="Random cat with the 3 first words of the random sentence"
        />
      </section>
      <button onClick={handleClick}>New cat fact</button>
    </main>
  )
}
