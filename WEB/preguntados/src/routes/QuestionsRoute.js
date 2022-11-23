import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Api from "../api/Api"
import Questions from "../components/Questions"


const QuestionsRoute = () => {
  let [params] = useSearchParams()
  let difficulty = params.get('difficulty')
  let [result, setResult] = useState([])

  useEffect(() => {
    Api.getQuestions(difficulty)
      .then(data => setResult(data))
    
  }, [difficulty])

  return (
    <Questions data={result}/>
  )
}

export default QuestionsRoute