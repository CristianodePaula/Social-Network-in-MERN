import React, { useRef } from 'react'
import styled from 'styled-components'
import Topbar from '../../components/Bars/Topbar/Topbar'
import contact from '../../img/contact.jpg'
import { sendContact } from "../../redux/api/ContactRequest"
import { useDispatch } from "react-redux"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  justify-content: center;
  background:url(${contact});
  background-size: cover;
`
export const Title = styled.h1`
  color: black;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px 80px 10px 80px;
`
const Input = styled.input`
  height: 25px;
  width: 300px;
  margin: 10px;
  background: gainsboro;
  border: none;
  border-radius: 20px;
  padding-left: 10px;
  outline: 0px;
`
const TextInput = styled.input`
  width: 300px;
  margin: 10px;
  background: gainsboro;
  border: none;
  border-radius: 20px;
  padding-left: 10px;
  outline: 0px;
  height: 150px;
`
const Button = styled.button`
  margin: 10px;
  border: none;
  border-radius: 20px;
  padding: 5px;
  background-color: blue;
  color: white;
  cursor: pointer;
`
export default function Contact() {

  const dispatch = useDispatch()
  const name = useRef()
  const email = useRef()
  const message = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newContact = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    }
      try {
        dispatch(sendContact(newContact))
      } catch (err) {
        console.log(err)
      }
  }
  
    return (
      <>
        <Topbar />
        <Container>
          <Title>Fale Conosco!</Title>
          <Form>
            <Input
              type='text'
              placeholder='Nome'
              name="name"
              ref={name}
            />
            <Input
              type='text'
              placeholder='Email'
              name="email"
              ref={email}
            />
            <TextInput
              type='textarea'
              placeholder='Menssagem'
              name="message"
              ref={message}
            />
            <Button
             onClick={handleSubmit}
            >Enviar</Button>
          </Form>
        </Container>
      </>
    )
  }


  /*
  export default function Contact() {

  const dispatch = useDispatch()
  const name = useRef()
  const email = useRef()
  const message = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newContact = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    }
      try {
        dispatch(sendContact(newContact))
      } catch (err) {
        console.log(err)
      }
  }
  
    return (
      <>
        <Topbar />
        <Container>
          <Title>Fale Conosco!</Title>
          <Form onChange={handleSubmit}>
            <Input
              type='text'
              placeholder='Nome'
              name="name"
              ref={name}
            />
            <Input
              type='text'
              placeholder='Email'
              name="email"
              ref={email}
            />
            <TextInput
              type='textarea'
              placeholder='Menssagem'
              name="message"
              ref={message}
            />
            <Button type='submit'>Enviar</Button>
          </Form>
        </Container>
      </>
    )
  }
*/