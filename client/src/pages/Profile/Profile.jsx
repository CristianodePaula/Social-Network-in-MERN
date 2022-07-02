import React from 'react'
import styled from 'styled-components'
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/Leftbar/Leftbar'
import Rightbar from '../../components/Rightbar/Rightbar'
import Feedbar from '../../components/Feedbar/Feedbar'


const Container = styled.div``
//const Wrapper = styled.div``

export default function Profile() {
  return (
    <Container>
        <Topbar />
        <Leftbar />
        <Rightbar />
        <Feedbar />
    
    </Container>
  )
}
