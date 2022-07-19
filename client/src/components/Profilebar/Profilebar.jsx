import React from 'react'
import styled from 'styled-components'
import InfoCard from '../../components/InfoCard/InfoCard'
import Friends from '../Friends/Friends'

const Container = styled.div`
  flex: 3;
`
const Wrapper = styled.div`
  display: flex;  
  flex-direction: column;
  padding: 10px;
` 
export default function Profilebar() {

  return (
    <Container>
      <Wrapper>
      <InfoCard />
      <Friends />
      </Wrapper>
    </Container>
  )
}
