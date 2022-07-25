import React from 'react'
import styled from 'styled-components'
import {mobile} from '../../resources/Responsive'

export const Container = styled.div`
  display: flex;  
  background: grey;
  ${mobile({
    flexDirection: 'column',
    minHeight: '100vh',
  
  })}
`
export default function Post() {

  return (
    <Container>
        Post
    </Container>

  )
}