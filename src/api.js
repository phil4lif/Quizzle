import axios from 'axios'

const api = axios.create({
  baseURL: 'https://trivia-admin.herokuapp.com'
})

export default api;