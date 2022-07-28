import React, {useState} from 'react'
/*
import {
  Container,
  Wrapper,
  UserOn,
  ProfilePic,
  OnOff,
  Name
} from './FriendsOnlineStyle'
*/
import { followersData } from '../../resources/Data'
import { Link } from 'react-router-dom'
import FriendsOnlineModal from '../FriendsOnlineModal/FriendsOnlineModal'

import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 80%;
  background: gainsboro;
  border-radius: 20px;
`
export const Title = styled.h2`
  font-size: 15px;   
`
export const User = styled.div`
  display: flex;
  flex-direction: grid;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 60%;
`
export const ProfilePic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0px 10px 10px 10px;
`
export const OnOff = styled.a`
  height: 12px; 
  width: 12px;
  border-radius: 50%;
  position: absolute;
  margin-Left: 45px;
  margin-bottom: 20px;
`
export const Name = styled.span``

const Teste = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Span = styled.span`
display: flex;
justify-content: center;
width: 100%;
color: orangered;
margin-top: 10px;
cursor: pointer;
margin-bottom: 10px;
`

export default function FriendsOnline() {

  const [modalOpened, setModalOpened] = useState(false)

  return (
    <Container>
      <Wrapper>
        <Title>Amigos Online</Title>
        <Teste>
          {followersData.slice(0, 5).map((userOn, index) => {
            return (
              <User>
                <ProfilePic src={userOn.img} />
                <OnOff />
                <Name>{userOn.name}</Name>
              </User>
            )
          })}
        </Teste>
        <Span onClick={() => setModalOpened(true)}> Ver Todos </Span>
        <FriendsOnlineModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
      </Wrapper>
    </Container>
  )
}
