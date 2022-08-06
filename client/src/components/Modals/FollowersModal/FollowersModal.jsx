import React from "react"
import { Modal, useMantineTheme } from "@mantine/core"
import FollowingYouCard from "../../Friends/FollowingYouCard/FollowingYouCard"

const FollowersModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme()
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    <FollowingYouCard location='modal'/>
    </Modal>
  )
}

export default FollowersModal

/*
import React, { useEffect, useState } from "react"
import { Modal, useMantineTheme } from "@mantine/core"
import FollowingYouCard from "../FollowingYouCard/FollowingYouCard"
import { useSelector } from "react-redux"
import styled from 'styled-components'
import { getAllUser } from "../../redux/api/UserRequests"
import User from "../User/User"


export const Container = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  font-size: 13px;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
`
export const Wrapper = styled.div`
  width: 270px;
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
`
const FollowersModal = ({ modalOpened, setModalOpened, data }) => {

  const { user } = useSelector((state) => state.authReducer.authData)
  const theme = useMantineTheme()
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser()
      setPersons(data)
    }
    fetchPersons()
  }, [])

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
    
      <Wrapper>
        <H1>Todos</H1>
        <Users>
          {persons.map((person, id) => {
            if (person._id !== user._id)
              return <User person={person} key={id} />
          })}
        </Users>
        <Span onClick={() => setModalOpened(true)}> Visualizar </Span>
      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
      </Wrapper>
    </Modal>
  )
}

export default FollowersModal

*/
