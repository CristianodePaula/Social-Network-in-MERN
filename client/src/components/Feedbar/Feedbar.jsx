import React from 'react'
import styled from 'styled-components'
import PostShare from '../PostShare/PostShare'

const Container = styled.div`
  flex: 6;
  background: gainsboro;
`
const Wrapper = styled.div`
`
export default function Feed() {
  return (
    <Container>
      <Wrapper>
        <PostShare />
      </Wrapper>
    </Container>
  )
}
