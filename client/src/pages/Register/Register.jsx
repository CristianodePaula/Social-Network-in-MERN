import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
height: 100vh;
width: 100vw;
background: gainsboro;
display: flex;
align-items: center;
justify-content: center;
`

const BoxRegister = styled.div`
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
`
export const Span = styled.span`
  color: red;
`

export default function Register() {
  return (
    <Container>
      <BoxRegister>
        <Title>Crie um usuário</Title>
        <Input placeholder='nome' />
        <Input placeholder='email' />
        <Input placeholder='senha' />
        <Input placeholder='confirmar senha' />
        <Button>Registrar</Button>
        <Link to='/login' style={{textDecoration: 'none'}}>
            <Span>Voltar</Span>
        </Link>
      </BoxRegister>
    </Container>
  )
}
