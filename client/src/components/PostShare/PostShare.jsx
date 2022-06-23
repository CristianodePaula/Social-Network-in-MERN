import React from 'react'
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
  font-size: 25px;
  cursor: pointer;
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
  margin-bottom: 5px;
`
export default function PostShare() {
  return (
    <Container>
      <Wrapper>
        <ProfilePic src="https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Input />
      </Wrapper>
      <Share>
        <Option>
          <FaPhotoVideo style={{color: 'blue'}}/>
        </Option>
        <Option>
          <FaLocationArrow style={{color: 'red'}}/>
        </Option>
        <Option>
          <FaRegCalendarAlt style={{color: 'green'}}/>
        </Option>
        <Button>Publicar</Button>
      </Share>
    </Container>
  )
}
