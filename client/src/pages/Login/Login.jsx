import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
export const BoxLogin = styled.div`
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
  return (
    <Container>
      <Wrapper>
        <BoxSocial>
          <Title>Social Pet</Title>
          <Desc>Esta é uma página destinadas a ONGS que cuidam dos animais</Desc>
        </BoxSocial>
        <BoxLogin>
          <TitleLogin>Logar</TitleLogin>
          <Input placeholder='email'/>
          <Input placeholder='senha'/>
          <Button>Entrar</Button>
          <Link to='/register' style={{textDecoration: 'none'}}>
            <Span>Registrar</Span>
          </Link>
        </BoxLogin>
      </Wrapper>
    </Container>
  )
}
