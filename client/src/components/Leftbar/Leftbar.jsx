import React from 'react'
import styled from 'styled-components'
import FollowingYouCard from '../FollowingYouCard/FollowingYouCard'
import ProfileCard from '../ProfileCard/ProfileCard'

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrapper = styled.div`
  padding: 10px;
` 
export default function Leftbar() {
  return (
    <Container>
      <Wrapper>
        <ProfileCard />
        <FollowingYouCard />
      </Wrapper>
    </Container>
  )
}
