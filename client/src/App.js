import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import NewPage from './pages/NewPage/NewPage'
import Chat from './pages/Chat/Chat'
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
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../home" /> : <Login />}
        />
        <Route
          path='/register'
          element={user ? <Navigate to="../home" /> : <Register />}
        />

        <Route
          path="/newpage"
          element={user ? <NewPage /> : <Navigate to="../login" />}
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../login" />}
        />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Página não existente</p>
            </main>
          }
        />
      </Routes>
    </>
  )
}