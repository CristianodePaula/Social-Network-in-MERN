import React, { useEffect, useState } from "react"
import FollowersModal from "../FollowersModal/FollowersModal"
import { getAllUser } from "../../redux/api/UserRequests"
import User from "../Users/Users"
import { useSelector } from "react-redux"
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 80%;
  background: gainsboro;
  border-radius: 20px;
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
  margin-bottom: 10px;
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
      <Wrapper>
        <H1>Sugestões de amizade</H1>
        <Users>
          {persons.slice(0, 5).map((person, id) => {
            if (person._id !== user._id)
              return <User person={person} key={id} />
          })}
        </Users>
        <Span onClick={() => setModalOpened(true)}> Ver Todos </Span>
      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
      </Wrapper>
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