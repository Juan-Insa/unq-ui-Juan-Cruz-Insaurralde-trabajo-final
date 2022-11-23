import './App.css';
import Browser from './routes/BrowserRoute';
import background from './/components/src/main-background.jpg'

function App() {
  
  return (
    <div className="App">
      <div class="container" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize:"cover", minHeight:"100vh",  backgroundPosition: "40% 30%"}}>
        <header >
          <Browser/>
        </header>
      </div>
    </div>
  );
}

export default App;
