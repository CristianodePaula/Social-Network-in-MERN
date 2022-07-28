import React from 'react'
import styled from 'styled-components'
import Friends from '../Friends/Friends'
import Pages from '../Pages/Pages'

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
      <Friends />
      <Pages />
      </Wrapper>
    </Container>
  )
}
