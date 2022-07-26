import React, { useEffect } from 'react'
import styled from 'styled-components'
import SinglePost from '../SinglePost/SinglePost'
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getTimelinePosts } from "../../actions/PostsAction"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export default function Posts() {
  
  const { user } = useSelector((state) => state.authReducer.authData)
  let { posts, loading } = useSelector((state) => state.postReducer)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])
  if(!posts) return 'No Posts'
  if(params.id) posts = posts.filter((post)=> post.userId===params.id)

  return (
    <Container>
         {loading
        ? "Procurando postagens..."
        : posts.map((post, id) => {
            return <SinglePost data={post} key={id} />
          })}
    </Container>
  )
}
