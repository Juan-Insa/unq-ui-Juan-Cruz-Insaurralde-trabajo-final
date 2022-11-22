import {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import Api from "../api/Api.js"

const Difficulty = () => {
  const [difficulties, setDifficulties] = useState([])
  
  useEffect(() => {
    Api.getDifficulty()
      .then((data) => setDifficulties(data))
  }, [])

  return (
  <div class="row">
    <div class="col fw-bold" style={{ margin:"40px", color:"whitesmoke", textShadow:"3px 3px 5px #000000"}}>
      Elegir dificultad:
    </div> 
    {difficulties.map(d => 
      <div key={d}>
        {DifficultyButton(d)}
        {console.log(d)}
      </div>)}
  </div>
)}

const DifficultyButton = (diff) => {
  
  const navigate = useNavigate()
  
  const goToQuestions = () => {
    navigate(`/questions?difficulty=${diff}`)
  } 

  return (
  <div class="row justify-content-center">
    <div class="col-4 d-grid">
      <button type="button " class="btn btn-light" style={{ margin:"10px"}} onClick={() => goToQuestions()}>
        {diff}
      </button>
    </div>
  </div>
)}

export default Difficulty