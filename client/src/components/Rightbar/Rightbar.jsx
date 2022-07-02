import React from 'react'
import styled from 'styled-components'
import Banner from '../Banner/Banner'
import { dataSlider } from '../../resources/Data'
import FriendsOnline from '../FriendsOnline/FriendsOnline'

const Container = styled.div`
  flex: 3;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const Title = styled.h2`
  font-size: 20px;
`
export default function Rightbar() {
  return (
    <Container>
      <Wrapper>
      <Title>Animais adotados</Title>
        <Banner slides={dataSlider}/>
        <FriendsOnline />
      </Wrapper>
    </Container>
  )
}
