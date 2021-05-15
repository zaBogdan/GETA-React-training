import React,{useState} from 'react'
import {useFormik} from 'formik'
import './Post.css'
import AddCommentForm from './AddCommentForm'
import LikeCounter from './LikeCounter'
import CommentList from './CommentList'

const Post = ({text, image}) =>{
    const [comments,setComments]= useState([])
    const [likeCount,setlikeCount]= useState(0)

    return (
        <div className="post">
            { image ? <img src={image} alt={text}/> : null}

            <p className="text">{text}</p>

            <LikeCounter likeCount={likeCount} setlikeCount={setlikeCount} />

            <AddCommentForm setComments={setComments} />

            <CommentList comments={comments} />


        </div>
    )
}

export default Post