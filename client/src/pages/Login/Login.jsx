import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { logIn } from "../../actions/AuthActions.js"
import { useDispatch } from "react-redux"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: gainsboro;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const BoxSocial = styled.div`
  height: 200px;
  width: 300px;
  padding: 20px;
  margin: 30px;
`
export const Title = styled.h1`
  color: blue;
`
export const Desc = styled.span``
export const BoxLogin = styled.form`
  height: 260px;
  width: 300px;
  padding: 20px;
  background: blue;
  margin: 30px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const TitleLogin = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  height: 30px;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  background: gainsboro;
  padding-left: 10px;
`
export const Button = styled.button`
  height: 40px;
  width: 310px;
  border-radius: 10px;
  border: none;
  background: red;
  color: white;
  margin-bottom: 40px;
`
export const Span = styled.span`
  color: red;
`
export default function Login() {

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
        dispatch(logIn(data, navigate))
  }

  return (
    <Container>
      <Wrapper>
        <BoxSocial>
          <Title>Social Pet</Title>
          <Desc>Esta é uma página destinadas a ONGS que cuidam dos animais</Desc>
        </BoxSocial>
        <BoxLogin onSubmit={handleSubmit}>
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
        <Button 
          type='submit'
        >Registrar
        </Button>
        <Link to='/register' style={{textDecoration: 'none'}}>
            <Span>Registrar</Span>
          </Link>
        </BoxLogin>
      </Wrapper>
    </Container>
  )
}
