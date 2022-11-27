import { useState, useEffect } from "react"
import Api from "../api/Api"

const Answers = ({data, nextR}) => (
  <div>
    <AnswerButton option={"option1"} id={data.id} answer={data.option1} next={nextR}/> 
    <AnswerButton option={"option2"} id={data.id} answer={data.option2} next={nextR}/> 
    <AnswerButton option={"option3"} id={data.id} answer={data.option3} next={nextR}/> 
    <AnswerButton option={"option4"} id={data.id} answer={data.option4} next={nextR}/>
  </div>
)

const AnswerButton = ({option, id, answer, next}) => {
  const [result, setResult] = useState(null)

  const answersAvailability = (availability) => {
    document.getElementById("option1").disabled = availability
    document.getElementById("option2").disabled = availability
    document.getElementById("option3").disabled = availability
    document.getElementById("option4").disabled = availability
  }

  useEffect(() => {
    setResult(null)
    answersAvailability(false)
  },[id])

  const Result = (data) => {
    setResult(data)
    next(data.answer)
  }

  const HandleAnswer = () => {
    Api.postAnswer(id, option, Result)
    answersAvailability(true)
  }
  
  return (
    <div class="row justify-content-center">
      <div class="col-4 d-grid">
        <button id={option} type="button" class="btn btn-light" style={{ margin:"10px", backgroundColor: result ? (result.answer ? "green" : "red") : null}} onClick={HandleAnswer}>
          {answer}
        </button>
      </div>
    </div>
  )
}

export default Answers