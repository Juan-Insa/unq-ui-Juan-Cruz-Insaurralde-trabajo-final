import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Difficulty from '../components/Difficulty'
import Start from '../components/Start'
import QuestionsRoute from './QuestionsRoute'
import GameOver from '../components/GameOver'


const Browser = () =>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/start" element={<Start/>}/>
      <Route path="/difficulty" element={<Difficulty/>}/> 
      <Route path="/questions" element={<QuestionsRoute/>}/>
      <Route path="/gameover" element={<GameOver/>}/>
    </Routes>
</BrowserRouter>

export default Browser