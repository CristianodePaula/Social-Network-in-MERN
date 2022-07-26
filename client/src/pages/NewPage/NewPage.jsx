import React, { useState, useRef } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { uploadPage } from "../../actions/PageAction" // refazer?
import { uploadImage } from "../../actions/UploadAction" // refazer?

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
  height: 35vw;
  width: 40vw;
  border-radius: 20px;
  background: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ProfilePic = styled.img`
  height: 150px;
  width: 100%;
  object-fit:cover;
`
const BackgroundPic = styled.img`
  height: 80px;
  width: 80px;
  object-fit:cover;
  border-radius: 50%;
  margin-top: -20px;
`
const Title = styled.h1`
  font-size: 20px;
`
const Input = styled.input``
const Button = styled.button``

function NewPage() {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  const loading = useSelector((state) => state.postReducer.uploading)
  const [image, setImage] = useState(null)
  const desc = useRef()
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
    }
  }

  const imageRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPage = {
      userId: user._id,
      desc: desc.current.value,
    }

    if (image) {
      const data = new FormData()
      const fileName = Date.now() + image.name
      data.append("name", fileName)
      data.append("file", image)
      newPage.image = fileName
      console.log(newPage)
      try {
        dispatch(uploadImage(data))
      } catch (err) {
        console.log(err)
      }
    }
    dispatch(uploadPage(newPage)) // uploadPage
    resetShare()
  }

  const resetShare = () => {
    setImage(null);
    desc.current.value = ""
  }

  return (
    <>
      <Topbar />
      <Container>
        <Form>
          <ProfilePic src={
            user.coverPicture
              ? serverPublic + user.coverPicture // user.profilePicture
              : serverPublic + "defaultCover.png"
          }
          />
          <BackgroundPic src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          />
          <Title
            htmlFor="fileInput"
          >Imagem de Usuário</Title>
          <Input
            type="file"
            id="fileInput"
            ref={imageRef}
            onChange={onImageChange}
          />

          <Title>Descrição da Página</Title>
          <Input
            type='text'
            placeholder='Descrição'
            required
            ref={desc} />

          <Button type='submit'
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Enviando" : "Enviar"}
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default NewPage


/* 
      <ProfilePic src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        />
*/