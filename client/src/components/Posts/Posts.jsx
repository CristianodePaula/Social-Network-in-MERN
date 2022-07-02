import React from 'react'
import styled from 'styled-components'
import { postsData }  from '../../resources/Data'
import SinglePost from '../SinglePost/SinglePost'

const Container = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;
`
export default function Posts() {
  return (
    <Container>
        {postsData.map((post, id)=>{
            return <SinglePost data={post} id={id}/>
        })}
    </Container>
  )
}
