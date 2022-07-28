// TESTE - BUG DE NÃO ENCONTRAR PASSWORD EM DATA
import React, { useState } from "react"
import { Modal, useMantineTheme } from "@mantine/core"
import styled from 'styled-components'
import { FaCameraRetro, FaImage } from 'react-icons/fa'
import { useDispatch } from "react-redux" 
import { useParams } from "react-router-dom"
import { uploadImage } from "../../redux/actions/UploadAction"
import { updateUser } from "../../redux/actions/UserAction"

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
    
  const { password, ...other } = data; // Encaught TypeError: Cannot 
  //destructure property 'password' of 'data' as it is undefined.

  const [formData, setFormData] = useState(other);
  const dispatch = useDispatch();
  const param = useParams();
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const theme = useMantineTheme();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
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
        <BoxImg>
          <div>
          <Label htmlFor="fileInput">
            <FaCameraRetro /> 
            <Span>Imagem de Perfil</Span> 
          </Label>
          <InputImg
            type="file" 
            name="profileImage" 
            id='fileInput'
            onChange={onImageChange}
          />
          </div>
          <div>
          <Label htmlFor="fileInput2">
            <FaImage /> 
            <Span>Imagem de Fundo</Span> 
          </Label>
         <InputImg
            type="file" 
            name="coverImage" 
            id='fileInput2'
            onChange={onImageChange} 
          />
          </div>
        </BoxImg>
        <Button type="submit">Atualizar</Button>
      </Form>
    </Modal>
  )
}

export default ProfileEdit