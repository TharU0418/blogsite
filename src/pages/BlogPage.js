import React from 'react';
import { useLocation } from 'react-router-dom';

function BlogPage() {
  const location = useLocation();
  const postId = location.state;

  return (
    <div className='postblogcontainer'>
        
        <div style={{display:'flex', flexDirection:'row'}}>
            <h2 className="post-title">{postId.title}</h2>
            <p>{postId.category}</p>
        </div>


        <img src={postId.img} alt="Blog Post" className="blog-image" />
        {/* <p>Post ID: {postId.id}</p> */}
      
        <p className="blog-txt" >{postId.postText}</p>
    
    </div>
  );
}

export default BlogPage;