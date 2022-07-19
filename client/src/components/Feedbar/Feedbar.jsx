import React from 'react'
import { Container } from './FeedbarStyle'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'

export default function Feed() {
  return (
    <Container>
        <PostShare location="homepage"/>
        <Posts />
    </Container>
  )
}
