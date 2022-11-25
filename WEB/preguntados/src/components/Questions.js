import { useEffect, useState } from "react"
import Title from "./commons/Title";
import Api from "../api/Api";
import { useNavigate, useLocation} from "react-router-dom";


const Questions = (data) => {
  const navigate = useNavigate()
  let [dataQ,setDataQ] = useState([])
  let [current, setCurrent] = useState((0))
  let [correctAnswers, setCorrectAnswers] = useState(0) 

  const NextRound = (result) => {
    const timer = setTimeout(() => {
      setCurrent(current + 1)
      setCorrectAnswers(correctAnswers + (result ? 1 : 0))
      console.log(result)
    }, 0)
    return () => clearTimeout(timer)
  }

  useEffect(() => {
    if (current > 9) {navigate(`/gameover`, {
      state : {
        result : correctAnswers
        }
      })
    }
  }, [current])

  useEffect(() => {
    setDataQ(data.data)
    setCurrent(0)
    setCorrectAnswers(0)
  }, [data])

  return (
    <div class="container">
      <Title/>
      <h5 class="col fw-bold" style={{ margin:"80px", color:"whitesmoke", textShadow:"3px 3px 5px #000000"}}>
        <div style={{ margin:"10px"}}>
          <p>{current+1}/10</p>
          <p>Answer the following:</p>
        </div>
        {dataQ[current] ? dataQ[current].question : null}
      </h5>
      {AnswerButton("option1", dataQ[current] ? dataQ[current].id : null, dataQ[current] ? dataQ[current].option1 : null, NextRound)} 
      {AnswerButton("option2", dataQ[current] ? dataQ[current].id : null, dataQ[current] ? dataQ[current].option2 : null, NextRound)} 
      {AnswerButton("option3", dataQ[current] ? dataQ[current].id : null, dataQ[current] ? dataQ[current].option3 : null, NextRound)} 
      {AnswerButton("option4", dataQ[current] ? dataQ[current].id : null, dataQ[current] ? dataQ[current].option4 : null, NextRound)} 
    </div>
  )
}

const AnswerButton = (option, id, answer, next) => {
  const [result, setResult] = useState(null)

  useEffect(() => {
    setResult(null)
  },[id])

  const Result = (data) => {
    setResult(data)
    next(data.answer)
  }

  const HandleAnswer = () => {
    Api.postAnswer(id, option, Result)
  }
  
  return (
    <div class="row justify-content-center">
      <div class="col-4 d-grid">
        <button type="button" class="btn btn-light" style={{ margin:"10px", backgroundColor: result ? (result.answer ? "green" : "red") : null}} onClick={HandleAnswer}>
          {answer}
        </button>
      </div>
    </div>
  )
}

export default Questions