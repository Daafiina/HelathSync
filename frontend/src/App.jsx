import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import AppointmentsPage from './pages/AppointmentsPage'
import About from './pages/About'
import Login from './pages/Login'
import ProfilePage from './pages/profilePage'
import Appointment from './pages/Appointment'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[15%]'>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/appointment/:doctorId' element={<Appointment />}/>
        <Route path='/appointments-page' element={<AppointmentsPage />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile-page' element={<ProfilePage />}/>

      </Routes>
    </div>
  )
}

export default App
