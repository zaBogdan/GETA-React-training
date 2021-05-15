import React from 'react'

const CommentList = ({comments})=>{

    return(
        <div>
            {
            comments.map((el,index)=>(
                <p key={index}>{el}</p>
            ))
            }
        </div>
    )
}

export default CommentList