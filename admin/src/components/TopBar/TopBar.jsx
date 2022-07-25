import React from 'react'
/*
import {
  Container,
  BoxLinks,
  Item,
  BoxSettings,
  ImageUser,
  Icon
} from './TopBarStyle'
*/ 
import imgUser from '../../img/imgUser.jpg'
import { FaBell, FaUserCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  background-color: gainsboro;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "space-between",
    maxWidth: '100vw'
  })}
`
export const BoxSettings = styled.div`
  display: flex;
  align-items: flex-end; 
`
export const BoxLinks = styled.div`
  display: flex;
  align-items: flex-end;
  display: none; 
  ${mobile({
    display: 'inline',
  })}
`
export const Item = styled.span`
  color: white;
  margin-left: 10px;
  font-size: 12px;
` 
export const ImageUser = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
  ${mobile({
    height: '25px',
    width: '25px;',
    marginRight: '15px'
  })}
`
export const Icon = styled.a`
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2)
  }
  ${mobile({
    fontSize: '20px',
    marginRight: '10px'
  })}
`
export default function Topbar() {
  return (
    <Container>
      <BoxLinks>
        <Link to='/'>
          <Item> Início </Item>
        </Link>
        <Link to='/users'>
          <Item> Usuários </Item>
        </Link>
        <Link to='/products'>
          <Item> Produtos </Item>
        </Link>
        <Link to='/message'>
          <Item> Menssagem </Item>
        </Link>
        <Link to='/statistics'>
          <Item> Estatísticas </Item>
        </Link>
      </BoxLinks>
      <BoxSettings>
        <ImageUser src={imgUser} />
        <Icon>
          <FaUserCog />
        </Icon>
        <Icon>
          <FaBell />
        </Icon>
      </BoxSettings>
    </Container>
  )
}