import React from 'react'
import styled from 'styled-components'
import { followersData } from '../../resources/Data'

export const Container = styled.div`
  width: 260px;
  background: gainsboro;
  border-radius: 20px;
`
export const Wrapper = styled.div`
  margin-top: 40px;
  padding: 10px;
`
export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`
export const BoxFollower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BoxImgName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const BoxName = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.span`
`
export const Username = styled.span`
`
export const Image = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`
export const Button = styled.button`
  height: 30px;
  width: 60px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  background: orange;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
`
export default function FollowingYouCard() {
  return (
    <Container>
      <Wrapper>
        <Title>Pessoas que seguem você</Title>
        {followersData.map((follower, id) => {
          return (
            <BoxFollower>
              <BoxImgName>
                <Image src={follower.img} alt="" className='followerImage' />
                <BoxName>
                  <Name>{follower.name}</Name>
                  <Username>@{follower.username}</Username>
                </BoxName>
              </BoxImgName>
              <Button>Seguir</Button>
            </BoxFollower>
          )
        })}
      </Wrapper>
    </Container>
  )
}
