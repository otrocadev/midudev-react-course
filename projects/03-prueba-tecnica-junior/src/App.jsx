import { useEffect, useState } from 'react'

export function App() {
  const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
  // const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${fisrtWord}`
  const [fact, setFact] = useState('Hello cat here talking')

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)

        const fisrtWord = fact.split(' ', 3).join('')
        console.log(fisrtWord)
      })
  }, [])

  return (
    <>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </>
  )
}
