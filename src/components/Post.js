import React,{useState} from 'react'
import {useFormik} from 'formik'
import './Post.css'
import AddCommentForm from './AddCommentForm'
import LikeCounter from './LikeCounter'
import CommentList from './CommentList'
import { MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn } from 'mdbreact';

const Post = ({text, image}) =>{
    const [comments,setComments]= useState([])
    const [likeCount,setlikeCount]= useState(0)

    return (
            <MDBCard style={{ width: "30rem", margin: "1rem" }}>
            <MDBCardImage className="img-fluid" src={image} alt={text} cascade />
            <MDBCardBody>
                <MDBCardText>
                {text}
                </MDBCardText>
            <LikeCounter likeCount={likeCount} setlikeCount={setlikeCount} />

            <AddCommentForm setComments={setComments} />
            </MDBCardBody>
            </MDBCard>
    )
}

export default Post