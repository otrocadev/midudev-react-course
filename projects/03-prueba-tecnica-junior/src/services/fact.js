const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export const getFact = async () => {
  const response = await fetch(CAT_ENDPOINT_FACT)
  const data = await response.json()
  const { fact } = data
  return fact
}
