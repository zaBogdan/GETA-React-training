import React, { useEffect, useState } from 'react'
import './App.css';
import PostList from './components/PostList'
import AddPostForm from './components/AddPostForm';


function App() {
  const [posts, setPosts] = useState([]);
  const [initialUpdate, setinitialUpdate] = useState(false);

  useEffect(()=>{
    if(!initialUpdate){
      let data = localStorage.getItem('posts')
      setPosts(JSON.parse(data) || [])
      setinitialUpdate(true)
    }else{
      localStorage.setItem('posts', JSON.stringify(posts))
    }
  },[posts])

  return (
    <div className="main">
      <AddPostForm setPosts={setPosts}  />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
