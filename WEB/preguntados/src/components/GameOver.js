import { Link, useLocation, useNavigate } from "react-router-dom"
import Title from "./commons/Title"
import background from "./src/game-over.png"

const GameOver = (props) => {
  const location = useLocation();
  
  return (
    <div class="container fw-bold">
      <Title/>
      <div style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize:"contain", minHeight:"80vh",  backgroundPosition: "60% 20%"}}>
      <h5 style={{ margin:"100px", color:"whitesmoke", textShadow:"3px 3px 2px #000000"}}> 
        You had {location.state.result}/10 correct answers
      </h5>
      <Link to="/difficulty">
        <img src={require(`./src/restart.png`)} width={300} style={{marginTop:"300px"}}/>
      </Link>
      </div>
    </div>
)}

export default GameOver