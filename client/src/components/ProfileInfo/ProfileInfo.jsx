import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import { FaEdit } from 'react-icons/fa'
import ProfileEdit from '../../components/ProfileEdit/ProfileEdit'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { logout } from "../../actions/AuthActions"
import * as UserApi from "../../api/UserRequests.js"

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
export default function ProfileInfo() {

  const [editOpened, setEditOpened] = useState(false)
  const profileUserId = params.id
  const dispatch = useDispatch()
  const params = useParams()
  const [profileUser, setProfileUser] = useState({})
  const { user } = useSelector((state) => state.authReducer.authData)

  const handleLogOut = ()=> {
    dispatch(logout())
  }

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser)
      }
    };
    fetchProfileUser();
  }, [user]);

  return (
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
  )
}
