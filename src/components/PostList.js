import React from 'react'
import Post from './Post'

const PostList = ({posts})=>{

    return(
        <div>
            {posts&&posts.map&&posts.map((el,index)=>(
            <Post 
                key={index}
                text={el.text}
                image={el.imageUrl}
            />
            ))}
        </div>
    )
}

export default PostList