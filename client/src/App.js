import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Banner from './components/Banner/Banner'
import Home from './pages/Home/Home'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/banner' element={<Banner />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
