import background from "./src/main-background.jpg"
import Difficulty from "./Difficulty"

const Start = () => (
  <div class="container" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat'}}>
    <div class="row">
      <div class="col">
         <img src={require(`./src/preguntados-title.png`)} width={450} style={{ margin:"20px"}}/>
      </div>
    </div>
    <Difficulty/>
  </div>
) 

export default Start