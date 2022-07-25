import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import TopBar from '../../components/TopBar/TopBar'
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
export const Top = styled.div` 
  flex: 6;   
  ${mobile({
    flexDirection: 'column'
  })}
`
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({
    flexDirection: 'column'
  })}
`
export default function Message() {

  return (

    <Container>
        <SideBar />
      <Top>
        <TopBar />
        <Center>
          Message
        </Center>
      </Top>
    </Container>

  )
}