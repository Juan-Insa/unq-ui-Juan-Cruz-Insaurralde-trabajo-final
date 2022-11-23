import { useEffect, useState } from "react"
import Title from "./commons/Title";
import Api from "../api/Api";

const Questions = (data) => {
  let [dataQ,setDataQ] = useState([])
  let [current, setCurrent] = useState((-3));

  useEffect(() => {
    setDataQ(data.data)
    setCurrent(current + 1)
  }, [data])

  return (
    <div class="container">
      <Title/>
      <div class="col fw-bold" style={{ margin:"80px", color:"whitesmoke", textShadow:"3px 3px 5px #000000"}}>
        <div style={{ margin:"10px"}}>
          <p>{current}/10</p>
          <p>Answer the following cuestion</p>
        </div>
        {dataQ[current] ? dataQ[current].question : null}
      </div>
      {AnswerButton("option1", dataQ[current] ? dataQ[current].id : null, dataQ[current] ? dataQ[current].option1 : null)} 
      {AnswerButton("option2", dataQ[current] ? dataQ[current].id : null, dataQ[current] ? dataQ[current].option2 : null)} 
      {AnswerButton("option3", dataQ[current] ? dataQ[current].id : null, dataQ[current] ? dataQ[current].option3 : null)} 
      {AnswerButton("option4", dataQ[current] ? dataQ[current].id : null, dataQ[current] ? dataQ[current].option4 : null)} 
    </div>
  )
}

const AnswerButton = (option, id, answer) => {
  let [result, setResult] = useState()
  
  const HandleAnswer = () => {
    Api.postAnswer(id, option, setResult)
    console.log(result)
  }
  
  return (
    <div class="row justify-content-center">
      <div class="col-4 d-grid">
        <button class="btn btn-light" style={{ margin:"10px"}} onClick={() => HandleAnswer()}>
          {answer}
        </button>
      </div>
    </div>
  )
}

export default Questions