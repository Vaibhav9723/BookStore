
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Course from './components/Course'
import Signup from './components/Signup'
import Contactus from './components/Contactus'
import toast,{ Toaster } from 'react-hot-toast'
import Authprovider, { useAuth } from './context/Authprovider'

const App = () => {

  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
   <div>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser? <Course/> : <Navigate to={'/signup'}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
    </Routes>
    <Toaster />



    </BrowserRouter>
   </div>
  )
}

export default App