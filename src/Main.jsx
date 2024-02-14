import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom';
import MyNavbar from './Components/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Why from './Pages/Why';
import Countdown from './Pages/Countdown';
import CalltoAction from './Pages/CalltoAction';
import Form from './Pages/Form';

const Main = () => {
  return (
  <>
<MyNavbar/>
<Routes>
    <Route path="/" Component={Hero}/>
    <Route path="/about" Component={About}/>
    <Route path="/why?" Component={Why}/>
    <Route path="/countdown" Component={Countdown}/>
    <Route path="/calltoAction" Component={CalltoAction}/>
    <Route path="/form" Component={Form}/>
     <Route path="*" element={<Navigate to="/"/>}/>
</Routes>


  </>
  )
}

export default Main