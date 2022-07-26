import React from "react"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import {
  FaBackspace,
} from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 30px;
  color: black;  
  margin: 10px 40px 0px 20px;
  cursor: pointer;
  color: grey;
`

const NavIcons = () => {
  return (
    <Container>
      <Link to="../home">
        <Icon>
          <FaBackspace />
        </Icon>
      </Link>
    </Container>
  );
};

export default NavIcons;
