import { useEffect, useState } from "react"
import Title from "./commons/Title";

const Questions = (data) => {
  let [dataQ,setDataQ] = useState()
  let [current, setCurrent] = useState((-6));

  useEffect(() => {
    setDataQ(data.data[0])
    setCurrent(current + 1)
    console.log(data.data)
    console.log(dataQ)
  }, [data, dataQ])
  
  return (
    <div class="container">
      <Title/>
      <div class="col fw-bold" style={{ margin:"80px", color:"whitesmoke", textShadow:"3px 3px 5px #000000"}}>
        <div style={{ margin:"10px"}}>
          <p>{current}/10</p>
          <p>Answer the following cuestion</p>
        </div>
        {dataQ.question}
      </div>
        {DifficultyButton(dataQ.option1, dataQ.id)} 
        {DifficultyButton(dataQ.option2, dataQ.id)} 
        {DifficultyButton(dataQ.option3, dataQ.id)} 
        {DifficultyButton(dataQ.option4, dataQ.id)} 
    </div>
  
   )
}

const DifficultyButton = (option) => {
  
  const HandleAnswer = () => {
      
  }
  
  return (
  <div class="row justify-content-center">
    <div class="col-4 d-grid">
      <button class="btn btn-light" style={{ margin:"10px"}} onClick={() => HandleAnswer()}>
        {option}
      </button>
    </div>
  </div>
)}

export default Questions