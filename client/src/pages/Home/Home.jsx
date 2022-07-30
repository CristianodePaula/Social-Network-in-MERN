import React from 'react'
import styled from 'styled-components'
import Leftbar from '../../components/Leftbar/Leftbar'
import Feedbar from '../../components/Bars/Feedbar/Feedbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import Topbar from '../../components/Topbar/Topbar'

const Container = styled.div`
display: flex;
width: 100%;
`
export default function Home() {
  return (
    <>
      <Topbar />
      <Container>
        <Leftbar />
        <Feedbar />
        <Rightbar />
      </Container>
    </>
  )
}
