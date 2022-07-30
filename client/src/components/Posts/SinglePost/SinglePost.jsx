import React, { useState } from 'react'
import styled from 'styled-components'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { likePost, deletePost } from "../../redux/api/PostsRequests"
import { useSelector, useDispatch } from "react-redux"
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 1rem;
    gap: 1rem;
`
const ImagePost = styled.img`
    height: 350px;
    width: 600px;
    max-height: 20rem;
    object-fit: cover;
    border-radius: 0.5rem;
`
const PostBox = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
`
export const Icon = styled.a`
    font-size: 25px;
    cursor: pointer;
`
export default function SinglePost({ data }) {

    const dispatch = useDispatch()
    const param = useParams()
    const { user } = useSelector((state) => state.authReducer.authData);
    const { pages } = useSelector((state) => state.pageReducer.pageData);
    const [liked, setLiked] = useState(data.likes?.includes(user._id));
    const [likes, setLikes] = useState(data.likes?.length)

    const handleLike = (e) => {
        e.preventDefault()
        likePost(data._id, user._id);
        setLiked((prev) => !prev);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    }
  
    //console.log(pages)
    
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deletePost(param.id))
    }

    /*
    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/posts/${id}`, {
            data: { username: user.username },
          });
        } catch (err) { }
      };
*/

    return (
        <Container>
            <ImagePost
                src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
                alt="" />
            <PostBox>
                <img
                    src={liked ? Heart : NotLike}
                    alt=""
                    onClick={handleLike}
                />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
                <Icon>
                    <AiTwotoneEdit />
                </Icon>
                <Icon>
                    <AiFillDelete onClick={handleDelete}/>
                </Icon>
            </PostBox>
            <span style={{ color: "var(--gray)", fontSize: '12px' }}>
                {likes} likes
            </span>
            <div className="detail">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>
        </Container>
    )
}
