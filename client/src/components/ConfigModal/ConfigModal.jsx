import React, { useState } from "react"
import { Modal, useMantineTheme } from "@mantine/core"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { updateUser } from "../../actions/UserAction"

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

const ConfigureModal = ({ modalOpened, setModalOpened, data }) => {

    const theme = useMantineTheme();
    /*
  
    const { password, ...other } = data;
    */
    const [formData, setFormData] = useState('');
    const dispatch = useDispatch();
    const param = useParams();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(param.id));
        setModalOpened(false);
    }

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

            <Form className="infoForm" onSubmit={handleSubmit}>
                <H3>Configurações</H3>
                <div>
                    <Input
                        value={formData.firstname}
                        onChange={handleChange}
                        type="text"
                        placeholder="Primeiro Nome"
                        name="firstname"
                    />
                </div>
                <div>
                    <Input
                        value={formData.lastname}
                        onChange={handleChange}
                        type="text"
                        placeholder="Segundo Nome"
                        name="lastname"
                    />
                </div>
                <div>
                    <Input
                        value={formData.username}
                        onChange={handleChange}
                        type="text"
                        placeholder="Usuário"
                        name="username"
                    />
                </div>
                <div>
                    <Input
                        value={formData.password}
                        onChange={handleChange}
                        type="text"
                        placeholder="Senha"
                        name="password"
                    />
                </div>
                <Button type="submit">Atualizar</Button>
            </Form>

        </Modal>
    )
}

export default ConfigureModal
