import axios from "axios"

const url = `https://preguntados-api.vercel.app`

const get = async(url) =>
    await axios.get(url)
      .then(({ data }) => data)
      .catch(error => Promise.reject(error.response.data))

const getDifficulty = () => get(url + `/api/difficulty`)
const getQuestions = (difficulty) => get(url + `/api/questions?difficulty=${difficulty}`)

const postAnswer = async(id, option, set) => {
  const answer = {
    questionId: id,
    option: option
  }
  return (
  await axios.post(url + `/api/answer`, answer)
    .then(({data})  => {set(data)})
    .catch(error => Promise.reject(error.response.data))
  )
}

const Api = {
  getDifficulty,
  getQuestions,
  postAnswer
}

export default Api