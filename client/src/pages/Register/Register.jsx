import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { signUp } from "../../actions/AuthActions.js"
import { useDispatch } from "react-redux"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: gainsboro;
  display: flex;
  align-items: center;
  justify-content: center;
`
const BoxRegister = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: white;
  border-radius: 20px;
  padding: 30px;
`
export const Title = styled.h1`
  font-size: 20px;  
  margin-bottom: 20px;
`
const Input = styled.input`
  height: 30px;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  background: gainsboro;
  padding-left: 10px;
`
const Button = styled.button`
  height: 40px;
  width: 310px;
  border-radius: 10px;
  border: none;
  background: red;
  color: white;
  margin-bottom: 40px;
  cursor: pointer;
`
export const Span = styled.span`
  color: red;
`
export default function Register() {

  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState(initialState)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
        dispatch(signUp(data, navigate))
  }
  
  return (
    <Container>
      <BoxRegister onSubmit={handleSubmit}>
        <Title>Crie um usuário</Title>
        <Input 
          type='text'
          placeholder='nome' 
          name="firstname"
          onChange={handleChange}
        />
        <Input 
          type='text'
          placeholder='sobrenome' 
          name="lastname"
          value={data.lastname}
          onChange={handleChange}
        />
        <Input 
          type='text'
          placeholder='nome de usuário' 
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <Input 
          type='password'
          placeholder='senha' 
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <Input 
          type='password'
          placeholder='repetir senha'
          name="confirmpass"
          onChange={handleChange} 
        />
        <Button 
          type='submit'
        >Registrar
        </Button>
        <Link 
            to='/login' 
            style={{textDecoration: 'none'}}
        >
        <Span>Voltar</Span>
        </Link>
      </BoxRegister>
    </Container>
  )
}
