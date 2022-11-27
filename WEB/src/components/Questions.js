import { useEffect, useState } from "react"
import Title from "./commons/Title";
import Answers from "./Answers";
import { useNavigate } from "react-router-dom";


const Questions = ({data}) => {
  const navigate = useNavigate()
  let [current, setCurrent] = useState()
  let [correctAnswers, setCorrectAnswers] = useState(0) 
 
  const NextRound = (result) => {
    const timer = setTimeout(() => {
      setCurrent(current + 1)
      setCorrectAnswers(correctAnswers + (result ? 1 : 0))
    }, 2000)
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
    setCurrent(0)
  }, [data])

  return (
    <div class="container">
      <Title/>
      <h5 class="col fw-bold" style={{ margin:"80px", color:"whitesmoke", textShadow:"3px 3px 5px #000000"}}>
        <div style={{ margin:"10px"}}>
          <p>{current+1}/10</p>
          <p>Answer the following:</p>
        </div>
        {data.at(current) ? data.at(current).question : null}
      </h5>
      { data.at(current) ? <Answers data={data.at(current)} nextR={NextRound}/> : null}   
    </div>
  )
}

export default Questions