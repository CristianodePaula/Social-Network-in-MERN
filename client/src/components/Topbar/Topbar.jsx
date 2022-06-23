import React from 'react'
import styled from 'styled-components'
import { FaSearch, FaUserAlt, FaBell, FaMailBulk } from 'react-icons/fa'

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
const Input = styled.input`
  border: none;
  padding-left: 5px;
  outline: 0px;
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
  color: black;
  margin: 7px;
  cursor: pointer;
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
const ProfilePic = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
`
export default function Topbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Icon>
            <FaSearch />
            <Input placeholder="O que está procurando?" />
          </Icon>
        </Search>
        <SocialName>
          <Logo>Casa Animal</Logo>
        </SocialName>
        <Right>
          <Icon>
            <FaUserAlt />
          </Icon>
          <Icon>
            <FaMailBulk />
          </Icon>
          <Icon>
            <FaBell />
          </Icon>
          <ProfilePic src="https://images.pexels.com/photos/799420/pexels-photo-799420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Right>
      </Wrapper>
    </Container>
  )
}
