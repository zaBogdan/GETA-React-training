import React,{useState} from 'react'

const LikeCounter = ({likeCount,setlikeCount})=>{

    const increaseLikecount= ()=>{
        setlikeCount(likeCount+1);
    }
    const decreaseLikecount = () =>{
        setlikeCount((prev) => prev<=0 ? 0 : prev-1)
    }
    return(
        <div className="likes">
            <h3 className="likeCount">{likeCount} likes</h3>
            <div className="likeDislike">
                <button onClick={increaseLikecount}>Like</button>
                <button onClick={decreaseLikecount}>Dislike</button>
            </div>
        </div>
    )
}

export default LikeCounter