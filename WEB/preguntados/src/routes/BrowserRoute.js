import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Start from '../components/Start'

const Browser = () =>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/start" element={<Start/>}/>
    </Routes>
</BrowserRouter>

export default Browser