import React from 'react'
import styled from 'styled-components'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
border-radius: 1rem;
gap: 1rem;
`
const ImagePost = styled.img`
width: 100%;
max-height: 20rem;
object-fit: cover;
border-radius: 0.5rem;
`
const PostBox = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
`

export default function SinglePost({ data }) {
    return (
        <Container>
            <ImagePost src={data.img} alt="" />
            <PostBox>
                <img src={data.liked ? Heart : NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </PostBox>
            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} likes</span>
            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </Container>
    )
}
