import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import Api from "../api/Api.js"
import Title from "./commons/Title.js"

const Difficulty = () => {
  const [difficulties, setDifficulties] = useState([])
  
  useEffect(() => {
    Api.getDifficulty()
      .then((data) => setDifficulties(data))
  }, [])

  return (
  <div class="row">
    <Title/>
    <div class="col fw-bold" style={{ margin:"100px", color:"whitesmoke", textShadow:"3px 3px 5px #000000"}}>
      Choose difficulty:
    </div> 
    {difficulties?.map(d => 
      <div key={d}>
        { difficulties ? DifficultyButton(d) : null }
      </div>)}
  </div>
)}

const DifficultyButton = (diff) => (
  <div class="row justify-content-center">
    <div class="col-4 d-grid" style={{ margin:"10px" }}>
      <Link class="btn btn-light" to={`/questions?difficulty=${diff}`} style={{textDecoration:"none", color:"black"}}>{diff}</Link> 
    </div>
  </div>
)

export default Difficulty