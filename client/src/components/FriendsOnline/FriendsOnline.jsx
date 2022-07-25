import React from 'react'
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

import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 40px;
`
export const Wrapper = styled.div`
    width: 270px;
    border: 1px solid silver;
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
    margin: 10px;
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

export default function FriendsOnline() {
  return (
    <Container>
      <Wrapper>
      <Title>Amigos Online</Title>
      <Teste>
        {followersData.map((userOn, index) => {
          return (
            <User>
              <ProfilePic src={userOn.img} />
              <OnOff />
              <Name>{userOn.name}</Name>
            </User>
          )
        })}
        </Teste>
      </Wrapper>
    </Container>
  )
}
