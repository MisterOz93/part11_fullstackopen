import axios from 'axios'
const PORT = process.env.PORT || 3001
const baseUrl = `http://localhost:${PORT}/anecdotes`

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createAnecdote = async (content) => {
  const anecdote = {content, votes : 0}
  const response = await axios.post(baseUrl, anecdote)
  return response.data
}

const updateAnecdote = async (anecdote) => {
  const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1}
  const response = await axios.put(
    `${baseUrl}/${updatedAnecdote.id}`,
    updatedAnecdote)
  console.log('response from put req is', response)
  return response.data
}

export default { getAll, createAnecdote, updateAnecdote }