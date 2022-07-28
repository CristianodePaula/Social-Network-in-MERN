import React from 'react'
import styled from 'styled-components'
import FollowingYouCard from '../FollowingYouCard/FollowingYouCard'
import ProfileCard from '../ProfileCard/ProfileCard'
import Banner from '../Banner/Banner'
import { dataSlider } from '../../resources/Data'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import FriendsOnline from '../FriendsOnline/FriendsOnline'

const Container = styled.div`
  flex: 3;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export default function Leftbar() {

  const params = useParams()
  const profileUserId = params.id
  const { user } = useSelector((state) => state.authReducer.authData)

  return (
    <Container>
      <Wrapper>
        {user._id === profileUserId ? (
          <Banner slides={dataSlider} />
        ) : (
          <>
          <ProfileCard />
          <FollowingYouCard />
          </>
        )}
        {user._id === profileUserId ? (
          <>
            <FriendsOnline />
            
          </>
        ) : (
          ''
        )}
      </Wrapper>
    </Container>
  )
}

