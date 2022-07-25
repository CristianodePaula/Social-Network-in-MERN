import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 90vh;
  min-width: 100vw;
  background: blue; 
  display: flex; 
  flex: 6;   
`
function User() {
  return (
    <Container>User</Container>
  )
}

export default User