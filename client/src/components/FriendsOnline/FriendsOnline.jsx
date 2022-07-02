import React from 'react'
import styled from 'styled-components'
import { followersData } from '../../resources/Data'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
`
const Wrapper = styled.div`
    background: silver;
    width: 260px;
    padding: 10px;
    border-radius: 20px;
`
const Title = styled.h2`
    font-size: 20px;   
`
const ProfilePic = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin: 10px;
`
const UserOn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const OnOff = styled.span`
    height: 12px; 
    width: 12px;
    border-radius: 50%;
    background: green;
    position: absolute;
    margin-right: 60px;
    margin-bottom: 22px;
    
`
const Name = styled.span``

export default function FriendsOnline() {
  return (
    <Container>
        <Title>Amigos Online</Title>
        <Wrapper>
            {followersData.map((userOn, index)=>{
                return (
                <UserOn>
                <ProfilePic src={userOn.img} />
                <OnOff />
                <Name>{userOn.name}</Name>
                </UserOn> 
                )
            })}
        </Wrapper>
    </Container>
  )
}
