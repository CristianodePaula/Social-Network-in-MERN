import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Banner from './components/Banner/Banner'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/banner' element={<Banner />} />
      <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
