import React, { useEffect, useState } from "react"
import { FaUserEdit } from 'react-icons/fa'
import ProfileModal from "../ProfileModal/ProfileModal"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import * as UserApi from "../../redux/api/UserRequests.js"
import styled from 'styled-components'
import ConfigModal from "../ConfigModal/ConfigModal"
import {
  FaUserCog,
} from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 1rem;
  width: 95%;
  background: gainsboro;
  margin-top: -40px;
`
export const InfoHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
export const H1 = styled.h1`
  font-size: 20px;
`
export const Icon = styled.a`
  font-size: 25px;
  margin-left: 20px;
`
export const Info = styled.div`
  font-size: 15px;
`
export const Span = styled.span`
`
export const Value = styled.span``

const InfoCard = () => {

  const params = useParams()
  const [modalOpened, setModalOpened] = useState(false)
  const profileUserId = params.id
  const [profileUser, setProfileUser] = useState({})
  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId)
        setProfileUser(profileUser)
      }
    }
    fetchProfileUser()
  }, [user])

  return (
    <Container >
      <InfoHead>
        <H1>Quem Sou</H1>
        {user._id === profileUserId ? (
          <>
            <Icon>
              <FaUserEdit
                width="2rem"
                height="1.2rem"
                onClick={() => setModalOpened(true)}
                style={{ color: 'darkgreen' }}
              />
            </Icon>
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </>
        ) : (
          ""
        )}
      </InfoHead>
      <Info>
        <Span>
          <b>Nome: </b>
        </Span>
        <Value>{profileUser.firstname} {profileUser.lastname}</Value>
      </Info>
      <Info>
        <Span>
          <b>Usuário </b>
        </Span>
        <Value>{profileUser.username}</Value>
      </Info>
      <Info>
        <Span>
          <b>Relacionamento: </b>
        </Span>
        <Value>{profileUser.relationship}</Value>
      </Info>
      <Info>
        <Span>
          <b>Sobre: </b>
        </Span>
        <Value>{profileUser.about}</Value>
      </Info>

      <Info>
        <Span>
          <b>Cidade: </b>
        </Span>
        <Value>{profileUser.country}</Value>
      </Info>

      <Info>
        <Span>
          <b>País: </b>
        </Span>
        <Value>{profileUser.livesIn}</Value>
      </Info>

      <Info>
        <Span>
          <b>Trabalho: </b>
        </Span>
        <Value>{profileUser.worksAt}</Value>
      </Info>
    </Container>
  )
}

export default InfoCard
