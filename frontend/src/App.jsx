
//it will work as the middle path after the user register or login it will call thhe register and login function to interact with backend  
import { useState } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import ProtectedRoute from './components/ProtectedRoute'

//if user want to logout 
function Logout(){
  localStorage.clear()
  return <Navigate to="/Login"/>
}
//if user want to register
function RegisterAndLogout(){
  localStorage.clear() //if any one registering we will 1st clear localstorage , so that the acess token does not semanting to the register route
  return <Register/>
}
function App() {
 
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Logout" element ={<Logout/>}/>
          <Route path="/Register" element={<RegisterAndLogout/>}/>
          <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
