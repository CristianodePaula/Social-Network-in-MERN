import React, { useEffect, useState } from "react"
import "./FollowersCard.css"
import FollowersModal from "../FollowersModal/FollowersModal"
import { getAllUser } from "../../api/UserRequests"
import User from "../User/User"
import { useSelector } from "react-redux"
import styled from 'styled-components'

export const Container = styled.div`
  width: 93%;
  height: 100%;
  border-radius: 20px;
  background: red;
  display: flex;
  padding: 10px;
  flex-direction: column;
  font-size: 13px;
  background: gainsboro;
  align-items: center;
  margin-bottom: 40px;
`
export const Users = styled.div`
  display: flex;
  flex-direction: column;
`
export const H1 = styled.h1`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Span = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  color: orangered;
  margin-top: 10px;
  cursor: pointer;
`
const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false)
  const [persons, setPersons] = useState([])
  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser()
      setPersons(data)
    }
    fetchPersons()
  }, [])

  return (
    <Container>
      <H1>Sugestões de amizade</H1>
      <Users>
        {persons.map((person, id) => {
          if (person._id !== user._id)
            return <User person={person} key={id} />
        })}
        <Span onClick={() => setModalOpened(true)}> Visualizar </Span>
      </Users>
      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </Container>
  )
}

export default FollowersCard

/*
 <Container>
      <H1>Sugestões de amizade</H1>
      {persons.map((person, id) => {
      if (person._id !== user._id) 
        return <User person={person} key={id} />
      })}
      {!location ? (
      <Span onClick={() => setModalOpened(true)}>Veja todos</Span>
      ) : (
        ""
      )}
      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </Container>
*/