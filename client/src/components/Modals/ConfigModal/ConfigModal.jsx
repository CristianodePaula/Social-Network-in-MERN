import React, { useState } from "react"
import { Modal, useMantineTheme } from "@mantine/core"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { updateUser } from "../../redux/actions/UserAction"
import styled from "styled-components"

export const Form = styled.form`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: flex-start;
`
export const H3 = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background: gainsboro;
  padding-left: 5px;
  height: 25px;
  width: 250px;
  font-size: 15px;
`
export const BoxImg = styled.div`
  display: flex;
`
export const InputImg = styled.input`
  display: none;
`
export const Span = styled.span`
  font-size: 15px;
  margin-left: 10px;
  
`
export const Label = styled.label`
  font-size: 10px;
  margin: 20px;
`
export const Button = styled.button`
  background: blue;
  color: white;
  width: 100px;
  border-radius: 5px;
  bordeR: none;
  padding: 10px;
  font-size: 12px;
  margin: 10px 0px 10px 0px;
  cursor: pointer;
`
function ConfigModal({ modalOpened, setModalOpened, data }) {

  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <Form onSubmit={handleSubmit}>
        <H3>Configurações</H3>
        <div>
          <Span>Nome</Span>
          <Input
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder={user.username}
            name="username"
          />
        </div>
        <div>
          <Span>Email</Span>
          <Input
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder={user.email}
            name="email"
          />
        </div>
        <div>
          <Span>Senha</Span>
          <Input
            value={formData.password}
            onChange={handleChange}
            type="text"
            placeholder='Senha'
            name="password"
          />
        </div>
        <Button type="submit">Alterar</Button>
        <Button>Excluir Conta</Button>


        <Link to='/contact'
          style={{
            textDecoration:'none',
            color: 'red',
            marginBottom: '20px;'
          }}
        >
          <Span>
            Entre em Contato
          </Span>
        </Link>


      </Form>
    </Modal>
  )
}

export default ConfigModal

/*

import React, { useState } from "react"
import { Modal, useMantineTheme } from "@mantine/core"
import { useDispatch } from "react-redux" 
import { useParams } from "react-router-dom"
import { updateUser } from "../../redux/actions/UserAction"
import styled from 'styled-components'

export const Form = styled.form`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const H3 = styled.div`
  font-size: 20px;
`
export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background: gainsboro;
  padding-left: 5px;
  height: 25px;
  width: 250px;
  font-size: 15px;
`
export const BoxImg = styled.div`
  display: flex;
`
export const InputImg = styled.input`
  display: none;
`
export const Span = styled.span`
  font-size: 15px;
  color: red;
  margin-left: 20px;
` 
export const Label = styled.label`
  font-size: 20px;
  margin: 20px;
`
export const Button = styled.button`
  background: red;
  color: white;
  width: 100px;
  border-radius: 5px;
  bordeR: none;
  padding: 10px;
  font-size: 12px;
  margin-top: 15px;
  cursor: pointer;
`
function ProfileEdit({ modalOpened, setModalOpened, data }) {

  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const dispatch = useDispatch();
  const param = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <Form onSubmit={handleSubmit}>
        <H3>Perfil</H3>
        
        <div>
          <Input
            value={formData.firstname}
            onChange={handleChange}
            type="text"
            placeholder="Segundo Nome"
            name="firstname"
          />
        </div>
        <div>
          <Input
            value={formData.lastname}
            onChange={handleChange}
            type="text"
            placeholder="Primeiro Nome"
            name="lastname"
          />
        </div>
        <div>
          <Input
            value={formData.about}
            onChange={handleChange}
            type="text"
            placeholder="Sobre"
            name="about"
          />
        </div>
        <div>
          <Input
            value={formData.worksAt}
            onChange={handleChange}
            type="text"
            placeholder="Ocupação"
            name="worksAt"
            className="infoInput"
          />
        </div>
        <Input
            value={formData.livesIn}
            onChange={handleChange}
            type="text"
            placeholder="Cidade"
            name="livesIn"
            className="infoInput"
          />
          <div>
          <Input
            value={formData.country}
            onChange={handleChange}
            type="text"
            placeholder="País"
            name="country"
            className="infoInput"
          />
        </div>
        <div>
          <Input
            value={formData.relationship}
            onChange={handleChange}
            type="text"
            className="infoInput"
            placeholder="Relacionamento"
            name="relationship"
          />
        </div>
        <Button type="submit">Atualizar</Button>
      </Form>
    </Modal>
  )
}

export default ProfileEdit
*/