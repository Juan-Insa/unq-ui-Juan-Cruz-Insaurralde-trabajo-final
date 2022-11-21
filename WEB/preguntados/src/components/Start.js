import {useEffect, useState} from "react"
import background from "./src/main-background.jpg"
import Api from "../api/Api.js"

const Start = (difficulties) => (
  <div class="container" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
    <div class="row">
      <div class="col">
         <img src={require(`./src/preguntados-title.png`)} width={450} style={{ margin:"20px"}}/>
      </div>
    </div>
    <Difficulty/>
  </div>
) 

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

const DifficultyButton = (diff) => (
  <div class="row justify-content-center">
      <div class="col-8 d-grid">
        <button type="button " class="btn btn-light" style={{ margin:"10px"}}>
          {diff}
        </button>
      </div>
    </div>
)

export default Start