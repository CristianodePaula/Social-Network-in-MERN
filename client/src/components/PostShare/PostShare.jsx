import React, { useState, useRef } from 'react'
import './Css.css'
import styled from 'styled-components'
import {
  FaPhotoVideo,
  FaLocationArrow,
  FaRegCalendarAlt
} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { uploadImage, uploadPost } from "../../actions/UploadAction"

const Container = styled.div`
  height: 120px;
  width: 100%;
  background: silver;
  border-radius: 20px;
  margin-top: 10px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const ProfilePic = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`
const Input = styled.input`
  border-radius: 10px;
  border: none;
  width: 550px;
  height: 30px;
`
const Share = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`
const Option = styled.a`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
`
const Span = styled.span`
  font-size: 16px;
  margin-left: 15px;
`
const Button = styled.button`
  height: 30px;
  width: 70px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  background: orange;
  color: white;
  cursor: pointer;
`
export default function PostShare() {

  const { user } = useSelector((state) => state.authReducer.authData)
  const loading = useSelector((state) => state.postReducer.uploading)
  const dispatch = useDispatch()
  const [image, setImage] = useState(null)
  const imageRef = useRef()
  const desc = useRef()
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    }

    if (image) {
      const data = new FormData()
      const fileName = Date.now() + image.name
      data.append("name", fileName)
      data.append("file", image)
      newPost.image = fileName
      console.log(newPost)
      try {
        dispatch(uploadImage(data))
      } catch (err) {
        console.log(err)
      }
    }
    dispatch(uploadPost(newPost))
    resetShare()
  }

  const resetShare = () => {
    setImage(null);
    desc.current.value = ""
  }

  return (
    <Container>
      <Wrapper>
        <ProfilePic src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        />
        <Input
          type='text'
          placeholder='O que deseja publicar?'
          required
          ref={desc}
        />
      </Wrapper>
      <Share>
        <Option
          onClick={() => imageRef.current.click()}
        >
          <FaPhotoVideo style={{ color: 'blue' }} />
          <Span> Mídia </Span>
        </Option>
        <Option>
          <FaLocationArrow style={{ color: 'red' }} />
          <Span> Local </Span>
        </Option>
        <Option>
          <FaRegCalendarAlt style={{ color: 'green' }} />
          <Span> Data </Span>
        </Option>
        <Button
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "uploading" : "Share"}
        </Button>
      </Share>
      <div style={{ display: "none" }}>
        <input
          type="file"
          ref={imageRef}
          onChange={onImageChange}
        />
      </div>
      {image && (
        <div className='previewImage'>
          <FaRegCalendarAlt onClick={() => setImage(null)} />
          <img src={URL.createObjectURL(image)} alt="preview" />
        </div>
      )}
    </Container>
  )
}
