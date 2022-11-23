import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Difficulty from '../components/Difficulty'
import Start from '../components/Start'
import QuestionsRoute from './QuestionsRoute'


const Browser = () =>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/start" element={<Start/>}/>
      <Route path="/difficulty" element={<Difficulty/>}/> 
      <Route path="/questions" element={<QuestionsRoute/>}/>
    </Routes>
</BrowserRouter>

export default Browser