import axios from 'axios'
const baseUrl = process.env.PORT ? 'https://fullstackopen-anecdotes.onrender.com/anecdotes' : 'http://localhost:3001/anecdotes'

const getAll = async () => {
  console.log('process.env.PORT inside anecdotesService is', process.env.PORT)
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