import React, { useState, useRef } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { uploadPage } from "../../redux/actions/PageAction" 
import { uploadImage } from "../../redux/actions/UploadAction" 
import { FaCameraRetro, FaImage } from 'react-icons/fa'

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
  height: 80vh;
  width: 60vw;
  border-radius: 20px;
  background: gainsboro;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
`
const ProfilePic = styled.img`
  height: 160px;
  width: 100%;
  object-fit:cover;
`
const BackgroundPic = styled.img`
  height: 100px;
  width: 100px;
  object-fit:cover;
  border-radius: 50%;
  margin-top: -50px;
`
const Input = styled.input`
  margin-top: 10px;
  border-radius: 20px;
  border: 0 none;
  outline: 0;
  padding-left: 15px;
  width: 320px;
  height: 25px;
`
const Button = styled.button`
  background: orange;
  color: white;
  border: 0;
  border-radius: 20px;
  height: 30px;
  width: 130px;
  margin-left: 45vw;
  cursor: pointer;
`
const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Left = styled.div`
  height: 100px;
  flex: 1;
  margin: 20px;
`
const Right = styled.div`
  height: 100px;
  flex: 1;
  margin: 20px;
`
const Label = styled.label``
export const InputImg = styled.input`
  display: none;
`
export const Span = styled.span`
  font-size: 15px;
  color: red;
  margin-left: 20px;
`
function NewPage() {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  //const { page } = useSelector((state) => state.pageReducer.pageData)
  const loading = useSelector((state) => state.postReducer.uploading)
  const [image, setImage] = useState(null)
  const desc = useRef()
  const cause = useRef()
  const email = useRef()
  const address = useRef()
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPage = {
      userId: user._id,
      desc: desc.current.value,
      cause: cause.current.value,
      email: email.current.value,
      address: address.current.value,
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
    dispatch(uploadPage(newPage))
    resetShare()
  }

  const resetShare = () => {
    setImage(null);
    desc.current.value = ""
  }

  /*
      <ProfilePic src={
            page.coverPicture
              ? serverPublic + page.coverPicture
              : serverPublic + "defaultCover.png"
          }
          />
          <BackgroundPic src={
            page.profilePicture
            ? serverPublic + page.profilePicture
            : serverPublic + "defaultProfile.png"
          }
          />
  */

  return (
    <>
      <Topbar />
      <Container>
        <Form>
    

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
          <Description>
            <Left >
              <Input
                type='text'
                placeholder='Causa'
                required
                ref={cause}
              />
              <Input
                type='text'
                placeholder='Descrição'
                required
                ref={desc}
                style={{
                  height: '100px'
                }}
              />
              </Left>
              <Right>
              <Input
                type='text'
                placeholder='Email'
                required
                ref={email}
              />
              <Input
                type='text'
                placeholder='Endereço'
                required
                ref={address}
              />
            </Right>
          </Description>
          <Button type='submit'
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Criando" : "Criar"}
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default NewPage


/*
import React, { useState, useRef } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { uploadPage } from "../../redux/actions/PageAction" 
import { uploadImage } from "../../redux/actions/UploadAction" 
import { FaCameraRetro, FaImage } from 'react-icons/fa'

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
  height: 80vh;
  width: 60vw;
  border-radius: 20px;
  background: gainsboro;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
`
const ProfilePic = styled.img`
  height: 160px;
  width: 100%;
  object-fit:cover;
`
const BackgroundPic = styled.img`
  height: 100px;
  width: 100px;
  object-fit:cover;
  border-radius: 50%;
  margin-top: -50px;
`
const Input = styled.input`
  margin-top: 10px;
  border-radius: 20px;
  border: 0 none;
  outline: 0;
  padding-left: 15px;
  width: 320px;
  height: 25px;
`
const Button = styled.button`
  background: orange;
  color: white;
  border: 0;
  border-radius: 20px;
  height: 30px;
  width: 130px;
  margin-left: 45vw;
  cursor: pointer;
`
const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Left = styled.div`
  height: 100px;
  flex: 1;
  margin: 20px;
`
const Right = styled.div`
  height: 100px;
  flex: 1;
  margin: 20px;
`
const Label = styled.label``
export const InputImg = styled.input`
  display: none;
`
export const Span = styled.span`
  font-size: 15px;
  color: red;
  margin-left: 20px;
`
function NewPage() {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  const loading = useSelector((state) => state.postReducer.uploading)
  const [image, setImage] = useState(null)
  const desc = useRef()
  const cause = useRef()
  const email = useRef()
  const address = useRef()
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
    }
  }

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
    dispatch(uploadPage(newPage))
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
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.png"
          }
          />
          <BackgroundPic src={
            user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
          }
          />

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


          <Description>
            <Left >
              <Input
                type='text'
                placeholder='Causa'
                required
                ref={cause}
              />

              <Input
                type='text'
                placeholder='Descrição'
                required
                ref={desc}
                style={{
                  height: '100px'
                }}
              />
              </Left>

              <Right>
              <Input
                type='text'
                placeholder='Email'
                required
                ref={email}
              />

              <Input
                type='text'
                placeholder='Endereço'
                required
                ref={address}
              />
            </Right>
          </Description>


          <Button type='submit'
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Criando" : "Criar"}
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default NewPage
*/ 