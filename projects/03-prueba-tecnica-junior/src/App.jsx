import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
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
