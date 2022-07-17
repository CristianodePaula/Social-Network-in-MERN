import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

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
export default function ProfileCard({ location }) {

  const { user } = useSelector((state) => state.authReducer.authData)
  const posts = useSelector((state) => state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <Container>
      <Wrapper>
        <BackgroundPic src={
          user.coverPicture
            ? serverPublic + user.coverPicture
            : serverPublic + "defaultCover.jpg"
        }
        />
        <ProfilePic src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        } />
        <Username>{user.fistname}{user.lastname}</Username>
        <span>{user.worksAt ? user.worksAt : 'Escreva algo sobre você'}</span>
        <Line />
        <InfoContainer>
          <div>
            <Span>Seguidores</Span>
            <Info>{user.followers.length}</Info>
          </div>
          <div>
            <Span>Seguindo</Span>
            <Info>{user.following.length}</Info>
          </div>
          {location === "profilePage" && (
            <>
              <div></div>
              <div>
                <span>{
                  posts.filter((post) => post.userId === user._id).length
                }</span>
                <span>Posts</span>
              </div>{" "}
            </>
          )}
        </InfoContainer>
        {location === "profilePage"  ? (
          ""
        ) : (
          <Link to={`/profile/${user._id}`}>
            <Perfil>Perfil</Perfil>
          </Link>
        )}
      </Wrapper>
    </Container>
  )
}
