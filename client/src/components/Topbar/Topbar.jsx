import React, { useState } from 'react'
import styled from 'styled-components'
import { 
  FaSearch, 
  FaUserCog, 
  FaRocketchat, 
  FaSignOutAlt, 
  FaNewspaper, 
  FaBackspace 
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ConfigModal from "../ConfigModal/ConfigModal"
import { useDispatch } from "react-redux"
import { logout } from "../../actions/AuthActions"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Container = styled.div`
  height: 50px;
  width: 100%;
  background: silver;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`
const Search = styled.div`
  flex: 3;
  height: 5vh;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const Logo = styled.span`
  text-transform: uppercase;
  color: white;
`
const IconSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
  color: black;  
  margin-left: 10px;
  cursor: pointer;
  color: grey;
`
const Input = styled.input`
  border: none;
  outline: 0px;
  font-size: 15px;
  margin-left: 10px;
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 25px;
  color: black;  
  margin-left: 40px;
  cursor: pointer;
  color: white;
`
const SocialName = styled.div`
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`
export const Button = styled.button`
  width: 2.5rem;
  height: 1.5rem;
  border: none
  aling-items: center;
  color: white;
  background: blue;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-size: 10px;
`
export default function Topbar() {

  const params = useParams()
  const profileUserId = params.id
  const { user } = useSelector((state) => state.authReducer.authData)
  const dispatch = useDispatch()
  const [modalOpened, setModalOpened] = useState(false);

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <Container>
      <Wrapper>
        <Search>
          <IconSearch>
            <FaSearch />
            <Input placeholder="O que está procurando?" />
          </IconSearch>
        </Search>
        <SocialName>
          <Logo>Casa Animal</Logo>
        </SocialName>
        <Right>
          {user._id !== profileUserId ? (
            ''
          ) : (
            <>
              <Link to='/home'>
                <Icon>
                  <FaBackspace />
                </Icon>
              </Link>
              <Link to='/newPage'>
                <Icon>
                  <FaNewspaper />
                </Icon>
              </Link>
            </>
          )}
          <Icon>
            <Link to='/chat' >
              <FaRocketchat />
            </Link>
          </Icon>
          <Icon>
            <FaUserCog onClick={() => setModalOpened(true)} />
          </Icon>
          <ConfigModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
          <Icon>
            <FaSignOutAlt onClick={handleLogOut} />
          </Icon>
        </Right>
      </Wrapper>
    </Container>
  )
}

