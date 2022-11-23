import { Link } from "react-router-dom"
import Title from "./commons/Title"

/**
 * Pantalla de inicio
 */
const Start = () => (
  <div class="container">
    <Title/>
    <Link to="/difficulty">
      <img src={require(`./src/start.png`)} width={300} style={{marginTop:"300px"}}/>
    </Link>
  </div>
  
)

export default Start