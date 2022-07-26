import React from "react"
import "./ProfileCard.css"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { FaUserAlt } from 'react-icons/fa'
import { useSelector } from "react-redux"

const Container = styled.div`
  border-radius: 1.5rem;
  display: flex;
  height: 340px;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  overflow-x: clip;
  background: gainsboro;
  margin-bottom: 40px
`
export const ProfileImages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ImgCover = styled.img`
  height: 120px;
  width: 300px;
  object-fit: cover;
`
export const ImgProfile = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: -40px;
`
export const ProfileName = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-top: -10px;
`
export const FollowStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-top: -20px;
`
export const Status = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Span = styled.span`
  margin-bottom: 10px;
`
export const Number = styled.span`
  color: blue;
`
export const Icon = styled.a`
  margin: 5px;
`
const LinkPerfil = styled.div`
  text-align: center; 
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: -10px;
  color: orangered;
`
const ProfileCard = ({ location }) => {

  const { user } = useSelector((state) => state.authReducer.authData)
  const posts = useSelector((state) => state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <Container>
      <ProfileImages>
        <ImgCover src={
          user.coverPicture
            ? serverPublic + user.coverPicture
            : serverPublic + "defaultCover.jpg"
        } alt="CoverImage" />
        <ImgProfile
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
      </ProfileImages>
      <ProfileName>
        {user.firstname} {user.lastname} 
      </ProfileName>
      <FollowStatus>
        <hr />
        <Status>
          <Span>Seguidores</Span>
          <Number>{user.followers.length}</Number>
        </Status>
        <Status>
          <Span>Seguindo</Span>
          <Number>{user.following.length}</Number>
        </Status>
        <Status>
          {location === "profilePage" && (
            <>
              <Span>Postagens</Span>
              <Number>{
                posts.filter((post) => post.userId === user._id).length
              }</Number>
              {" "}
            </>
          )}
        </Status>
        <hr />
      </FollowStatus>
      {location === "profilePage" ? (
        ""
      ) : (
        <div styled={{ display: 'flex', flexDirection: 'column' }}>
          <LinkPerfil>
            <Icon>
              <FaUserAlt />
            </Icon>
            <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              Ir Perfil
            </Link>
          </LinkPerfil>
        </div>
      )}
    </Container>
  )
}

export default ProfileCard


/*
import React from "react"
import "./ProfileCard.css"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { FaUserAlt } from 'react-icons/fa'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Container = styled.div`
  border-radius: 1.5rem;
  display: flex;
  height: 400px;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  overflow-x: clip;
  background: gainsboro;
  margin-bottom: 10px
`
export const ProfileImages = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ImgCover = styled.img`
  height: 150px;
  width: 300px;
  object-fit: cover;
`
export const ImgProfile = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: -40px;
`
export const ProfileName = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin-top: -10px;
`
export const FollowStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-top: -20px;
`
export const Status = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Span = styled.span`
  margin-bottom: 10px;
`
export const Number = styled.span`
  color: blue;
`
export const Icon = styled.a`
  margin: 5px;
`
const LinkPerfil = styled.div`
  text-align: center; 
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: -10px;
  color: orangered;
`
const ProfileCard = ({ location }) => {

  const { user } = useSelector((state) => state.authReducer.authData)
  const posts = useSelector((state) => state.postReducer.posts)

  return (
    <Container>
      <ProfileName>
        {user.firstname} {user.lastname} 
      </ProfileName>
      <FollowStatus>
        <hr />
        <Status>
          <Span>Seguidores</Span>
          <Number>{user.followers.length}</Number>
        </Status>
        <Status>
          <Span>Seguindo</Span>
          <Number>{user.following.length}</Number>
        </Status>
        <Status>
          {location === "profilePage" && (
            <>
              <Span>Postagens</Span>
              <Number>{
                posts.filter((post) => post.userId === user._id).length
              }</Number>
              {" "}
            </>
          )}
        </Status>
        <hr />
      </FollowStatus>
      {location === "profilePage" ? (
        ""
      ) : (
        <div styled={{ display: 'flex', flexDirection: 'column' }}>
          <LinkPerfil>
            <Icon>
              <FaUserAlt />
            </Icon>
            <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
              Ir Perfil
            </Link>
          </LinkPerfil>
        </div>
      )}
    </Container>
  )
}


export default ProfileCard
*/

