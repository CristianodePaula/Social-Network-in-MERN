import React, { useState, useRef } from 'react'
import './Css.css'
import styled from 'styled-components'
import {
  FaPhotoVideo,
  FaLocationArrow,
  FaRegCalendarAlt
} from 'react-icons/fa'

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
const PreviewImage = styled.div`
position: absolute;
height: 100px;
width: 100px;
object-fit: cover;
` 


export default function PostShare() {

  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage({
        image: URL.createObjectURL(img),
      })
    }
  }

  return (
    <Container>
      <Wrapper>
        <ProfilePic src="https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Input type='text' placeholder='O que deseja publicar?' />
      </Wrapper>
      <Share>
        <Option  onClick={()=>imageRef.current.click()}>
          <FaPhotoVideo style={{color: 'blue'}}/>
          <Span> Mídia </Span>
        </Option>
        <Option>
          <FaLocationArrow style={{color: 'red'}}/>
          <Span> Local </Span>
        </Option>
        <Option>
          <FaRegCalendarAlt style={{color: 'green'}}/>
          <Span> Data </Span>
        </Option>
        <Button>Publicar</Button>
      </Share>
      <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        {image && (
        <div className='previewImage'>
          <FaRegCalendarAlt onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>
      )}
    </Container>
  )
}
