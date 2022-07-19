import React from 'react'
import styled from 'styled-components'

export const Container = styled.div``
export const Wrapper = styled.div`
    background: silver;
    height: 300px;
    height: 300px;
    border-radius: 10px;
    padding: 10px;
`
export const Title = styled.h1`
    font-size: 20px;
` 

export default function Friends() {
  return (
    <Container>
        <Wrapper>
            <Title>Amigos</Title>
            
        </Wrapper>
    </Container>
  )
}
