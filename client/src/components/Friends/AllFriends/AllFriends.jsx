import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Container = styled.div``
export const Wrapper = styled.div`
    background: silver;
    height: 300px;
    border-radius: 10px;
    padding: 10px;
`
export const Title = styled.h1`
    font-size: 20px;
`
export const FriendsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
` 
export const FriendUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
` 
export const Img = styled.img`
  height: 80px;
  width: 80px;
`
export default function Friends() {

  const { user } = useSelector((state) => state.authReducer.authData)
  const [friends, setFriends] = useState([])
 // const [persons, setPersons] = useState([])
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("http://localhost:5000/user/friends/" + user._id)
        setFriends(friendList.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFriends()
  }, [user])

   return (
    <Container>
      <Wrapper>
        <Title>Amigos</Title>
        <FriendsContainer>
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend._id}
              style={{ textDecoration: "none" }}
            >
              <FriendUnit>
                <Img
                  src={
                    friend.profilePicture
                    ? serverPublic + friend.profilePicture
                    : serverPublic + "defaultCover.jpg"
                  }
                  alt=""
                />
                <span>{friend.username}</span>
              </FriendUnit>
            </Link>
          ))}
        </FriendsContainer>
      </Wrapper>
    </Container>
  )
}
