import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Banner from './components/Banner/Banner'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/banner' element={<Banner />} />
      <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
