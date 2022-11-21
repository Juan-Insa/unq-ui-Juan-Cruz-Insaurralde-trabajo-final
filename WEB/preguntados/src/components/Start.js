import React from "react"
import background from "./src/main-background.jpg"
import Api from "../api/Api.js"

const Start = () => (
  <div class="container" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
    <div class="row">
      <div class="col">
         <img src={require(`./src/preguntados-title.png`)} width={450} style={{ margin:"20px"}}/>
      </div>
    </div>
    <Difficulty/>
    {Api.getDifficulty()}
  </div>
) 

const Difficulty = () => (
  <div class="row">
    <div class="col fw-bold" style={{ margin:"40px", color:"whitesmoke", textShadow:"3px 3px 5px #000000"}}>
      Elegir dificultad:
    </div>
    <div class="row justify-content-center">
      <div class="col-8 d-grid">
        <button type="button " class="btn btn-light" style={{ margin:"10px"}}>
          Fácil 
        </button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 d-grid">
        <button type="button" class="btn btn-light" style={{ margin:"10px"}}>
          Normal 
        </button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 d-grid">
        <button type="button" class="btn btn-light" style={{ margin:"10px"}}>
          Dificil 
        </button>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 d-grid">
        <button type="button" class="btn btn-light" style={{ margin:"10px"}}>
          Extremo 
        </button>
      </div>
    </div>
  </div>
)

export default Start