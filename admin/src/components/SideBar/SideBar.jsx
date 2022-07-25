import React from 'react'
/*
import {
  Container, 
  LogoBox,
  LogoIcon,
  Logo,
  Title,
  Box,
  Icon,
  Item,

} from './SidebarStyle'
*/ 
import {
  FaCat,
  FaChalkboardTeacher,
  FaUser,
  FaStoreAlt,
  FaChartBar,
  FaEnvelope
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  background-color: gainsboro;
  min-height: 100vh;
  padding: 10px;
  ${mobile({
    display: 'none'
  })}
`
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(0.8)
  }
`
export const LogoIcon = styled.a`
  font-size: 20px;
  color: red;
`
export const Logo = styled.h1`
  font-size: 15px;
  padding-left: 10px;
  color: white;
`
export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
`
export const Icon = styled.a`
  font-size: 16px;
  color: navy;
  cursor: pointer;
`
export const Title = styled.h1`
  font-size: 16px;
  color: grey;
  margin-top: 25px;
  transition: 0.5s linear;
  cursor: pointer;
  &:hover {
    color: chocolate;
  }
`
export const Item = styled.span`
  font-size: 14px;
  margin-left: 12px;
  transition: 0.5s linear;
  &:hover {
    color: chocolate;
  }
`
export default function Sidebar() {
  return (
    <Container>
      <LogoBox>
        <LogoIcon >
          <FaCat />
        </LogoIcon>
        <Logo>CasaAnimal</Logo>
      </LogoBox>

      <Title>Inicial</Title>
      <Box>
        <Icon>
          <FaChalkboardTeacher />
        </Icon>
        <Link to='/'>
          <Item> Início </Item>
        </Link>
      </Box>

      <Title>Listas</Title>
      <Box>
        <Icon>
          <FaUser />
        </Icon>
          <Link to='/user'>
            <Item> Usuários </Item>
          </Link>
      </Box>
      <Box>
        <Icon>
          <FaStoreAlt />
        </Icon>
        <Link to='/post'>
          <Item> Postagens </Item>
        </Link>
      </Box>
      <Box>
        <Icon>
          <FaEnvelope />
        </Icon>
        <Link to='/message'>
          <Item> Menssagens </Item>
        </Link>
      </Box>

      
      <Title> Recursos</Title>
      <Box>
        <Icon>
          <FaChartBar />
        </Icon>
        <Link to='/statistics'>
        <Item> Estatísticas </Item>
        </Link>
      </Box>
    </Container>
  )
}