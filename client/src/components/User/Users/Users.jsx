import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { followUser, unfollowUser } from "../../../redux/actions/UserAction"
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`
export const UserBox = styled.div`
  display: flex;
  align-items: center;
`
export const Img = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 5px;
`
export const Names = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
`
export const Span = styled.span`
  font-size: 12px;
`

export const Button = styled.button`
  color: white;
  background: red;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  padding: 10px;
  font-size: 12px;
`
const User = ({ person }) => {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
  const { user } = useSelector((state) => state.authReducer.authData)
  const dispatch = useDispatch()
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  )
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user))
    setFollowing((prev) => !prev)
  }
  return (
    <Container>
      <UserBox>
        <Img
          src={
            publicFolder + person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
        />
        <Names>
          <Span>{person.firstname}</Span>
          <Span>@{person.username}</Span>
        </Names>
      </UserBox>
      <Button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Não seguir" : "Seguir"}
      </Button>
    </Container>
  )
}

export default User
