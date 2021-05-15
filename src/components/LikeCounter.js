import React,{useState} from 'react'
import {MDBCol, MDBBtn} from 'mdbreact';

const LikeCounter = ({likeCount,setlikeCount})=>{

    const increaseLikecount= ()=>{
        setlikeCount(likeCount+1);
    }
    const decreaseLikecount = () =>{
        setlikeCount((prev) => prev<=0 ? 0 : prev-1)
    }
    return(
        <MDBCol>
                <div className="d-flex  justify-content-between">
                    <div className="p-2 col-example align-self-center text-left ">{likeCount} likes</div>
                    <div className="p-2 col-example  text-left">
                        <MDBBtn onClick={increaseLikecount} color="success">Like</MDBBtn>
                        <MDBBtn onClick={decreaseLikecount} color="info">Dislike</MDBBtn>
                    </div>
                </div>
            {/* 
            <div className="likeDislike">

            </div> */}
        </MDBCol>

    )
}

export default LikeCounter