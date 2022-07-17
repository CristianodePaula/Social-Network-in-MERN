import React from 'react'
import styled from 'styled-components'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'

const Container = styled.div`
    flex: 6;
    background: gainsboro;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 110vh;
    overflow: auto;
`
const Wrapper = styled.div`
`
export default function Feed() {
  return (
    <Container>
      <Wrapper>
        <PostShare location="homepage"/>
        <Posts />
      </Wrapper>
    </Container>
  )
}
