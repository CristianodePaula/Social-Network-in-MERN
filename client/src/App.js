import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { useSelector } from "react-redux"

export default function App() {

  const user = useSelector((state) => state.authReducer.authData);

  return (
    <>
      <Routes>
   
      <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="/login" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../home" /> : <Login />}
        />
        <Route path='/register' element={<Register />} />
      </Routes>
 
    </>
  )
}