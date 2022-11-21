import axios from "axios"

const url = `https://preguntados-api.vercel.app`

const get = (url) =>
    axios.get(url)
      .then(({ data }) => data)
      .catch(error => Promise.reject(error.response.data))

const post = (url) =>
    axios.post(url)
      .then(({ data }) => data)
      .catch(error => Promise.reject(error.response.data))

const getDifficulty = () => get(url + `/api/difficulty`)
const getQuestions = (difficulty) => get(url + `/api/questions?difficulty=${difficulty}`)
