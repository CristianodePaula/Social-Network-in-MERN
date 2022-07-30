import React from 'react'
import { Container } from './FeedbarStyle'
import Posts from '../../Posts/Posts'
import PostShare from '../../Bars/Sharebar/Sharebar'

export default function Feed() {
  return (
    <Container>
        <PostShare location="homepage"/>
        <Posts />
    </Container>
  )
}
