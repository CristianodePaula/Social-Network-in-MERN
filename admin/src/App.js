import {
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import User from './pages/User/User'
import Posts from './pages/Posts/Posts'
import Post from './pages/Post/Post'
import Message from './pages/Message/Message'
import Statistics from './pages/Statistics/Statistics'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<Users/>} />
        <Route path='/user/:id' element={<User/>} />
        <Route path='/post' element={<Posts/>} />
        <Route path='/post/:id' element={<Post/>} />
        <Route path='/message' element={<Message/>} />
        <Route path='/statistics' element={<Statistics/>} />
        <Route path= '/login' element={<Login/>}  />
      </Routes>
    </>
  )
}

export default App