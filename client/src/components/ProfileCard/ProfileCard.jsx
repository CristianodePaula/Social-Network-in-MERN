import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 320px;
  width: 260px;
  border: 1px solid black;
  border-radius: 20px;
  overflow-x: clip;
  position: relative;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BackgroundPic = styled.img`
  width: 260px;
  height: 120px;
  object-fit: cover;
`
const ProfilePic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  margin-bottom: 40px;
  border: 4px solid white;
`
const Username = styled.h2`
  margin-top: 40px;
  font-size: 20px;
`
const Line = styled.div`
  width: 200px;
  border-bottom: 1px solid black;
`
const InfoContainer = styled.div`
  height: 80px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`
const Span = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
`
const Info = styled.div`
  font-size: 12px;
`
const Perfil = styled.span`
  color: red;
  position: absolute;
  bottom: 5%;
  cursor: pointer;
`
export default function ProfileCard() {
  return (
    <Container>
      <Wrapper>
        <BackgroundPic src='https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <ProfilePic src='https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Username>Sakura Card Captors</Username>
        <Line />
        <InfoContainer>
          <div>
            <Span>Seguidores</Span>
            <Info>1000</Info>
          </div>
          <div>
            <Span>Seguindo</Span>
            <Info>200</Info>
          </div>
          </InfoContainer>
          <Link to='/profile'>
            <Perfil>Perfil</Perfil>
          </Link>
      </Wrapper>
    </Container>
  )
}
