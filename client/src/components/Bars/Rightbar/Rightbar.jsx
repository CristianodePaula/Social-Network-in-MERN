import React from 'react'
import styled from 'styled-components'
import Banner from '../../Others/Banner/Banner'
import { dataSlider } from '../../../resources/Data'
import FriendsOnline from '../../Chat/FriendsOnline/FriendsOnline'

const Container = styled.div`
  flex: 3;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 30px;
`
export default function Rightbar() {

  return (
    <Container>
      <Wrapper>
        <Banner slides={dataSlider} />
      </Wrapper>
      <FriendsOnline />
    </Container>
  )
}
