
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Course from './components/Course'
import Signup from './components/Signup'
import Contactus from './components/Contactus'

const App = () => {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App