import React from "react"
import styled from "styled-components"
import Posts from "../../components/Posts/Posts"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import Leftbar from "../../components/Leftbar/Leftbar"
import Rightbar from "../../components/Rightbar/Rightbar"
import "./Profile.css"

export const ProfileTop = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 18rem auto 20rem;
  gap: 1rem;
`
export const ProfileCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Profile = () => {
  return (
    <ProfileTop>
      <Leftbar />
      <rofileCenter>
        <ProfileCard location="profilePage"/>
      <Posts/>
      </rofileCenter>
      <Rightbar/>
    </ProfileTop>
  )
}

/*
import React, { useState } from 'react'
import styled from 'styled-components'
import Topbar from '../../components/Topbar/Topbar'
import FollowingYouCard from '../../components/FollowingYouCard/FollowingYouCard'
import Rightbar from '../../components/Rightbar/Rightbar'
import Feedbar from '../../components/Feedbar/Feedbar'
import { FaEdit } from 'react-icons/fa'
import ProfileEdit from '../../components/ProfileEdit/ProfileEdit'

const Container = styled.div`
  display: flex;
`
const Leftbar = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
const EditProfile = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  width: 240px;
  height: 200px;
  padding: 10px;
  margin-bottom: 40px;
  background: gainsboro;
`
const Title = styled.h1`
  font-size: 20px;
`
const Info = styled.span`
  margin-bottom: 10px;
`
const Centerbar = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BackgroundPic = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`
const ProfilePic = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  margin-bottom: 20px;
  border: 4px solid white;
`
const Username = styled.h2`
  margin-top: 40px;
  font-size: 30px;
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
  font-size: 16px;
`
const InfoInfo = styled.div`
  font-size: 12px;
`
export default function Profile() {

  const [editOpened, setEditOpened] = useState(false)

  return (
    <>
      <Topbar />
      <Container>
        <Leftbar>
          <EditProfile>
            <div style={{ display: 'flex' }}>
              <Title>Editar Informações</Title>
              <FaEdit style={{ margin: '15px 10px 10px 45px', cursor: 'pointer' }} 
               onClick={() => setEditOpened(true)}
              />
            <ProfileEdit 
            editOpened={editOpened}
            setEditOpened={setEditOpened}
            />
            </div>
            <Info>Nome:</Info>
            <Info>Endereço:</Info>
            <Info>Ocupação:</Info>
            <Info>Contato:</Info>
          </EditProfile>
         
          <FollowingYouCard />
      
        </Leftbar>
        <Centerbar>
          <Wrapper>
            <BackgroundPic src='https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <ProfilePic src='https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <Username>Sakura Card Captors</Username>
            <Line />
            <InfoContainer>
              <div>
                <Span>Seguidores</Span>
                <InfoInfo>1000</InfoInfo>
              </div>
              <div>
                <Span>Seguindo</Span>
                <InfoInfo>200</InfoInfo>
              </div>
            </InfoContainer>
          </Wrapper>
          <Feedbar />
        </Centerbar>
        <Rightbar />
      </Container>
    </>
  )
}
*/

export default Profile
