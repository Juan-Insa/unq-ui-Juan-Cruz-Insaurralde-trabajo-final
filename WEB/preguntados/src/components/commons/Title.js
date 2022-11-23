import { Link } from "react-router-dom"

const Title = () => (
  <div class="container">
    <div class="row">
      <div class="col">
        <Link to="/start">
          <img src={require(`..//src/preguntados-title.png`)} width={450} style={{ margin:"35px"}}/>
        </Link>        
      </div>
    </div>
  </div>
) 



export default Title