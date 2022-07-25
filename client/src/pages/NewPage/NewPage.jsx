import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Form = styled.div`
  height: 30vw;
  width: 40vw;
  border-radius: 20px;
  background: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ProfilePic = styled.img``
const Title = styled.h1`
  font-size: 20px;
`
const Input = styled.span``
const Button = styled.button``

function NewPage() {
  return (
    <>
    <Topbar />
    <Container>
    <Form>
      <ProfilePic src=''/>
      <Title>Imagem de Fundo</Title>
      <Input type='text' />
      <Title>Imagem de Usuário</Title>
      <Input type='text' />
      <Title>Descrição da Página</Title>
      <Input type='text' />
      <Title>Endereço</Title>
      <Input type='text' />
      <Title>Email</Title>
      <Button type='submit'>Criar Página</Button>
    </Form>     
    </Container>
    </>
  )
}

export default NewPage