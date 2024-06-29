import React from 'react';

const BlogContainer = ({ imageUrl, category, title }) => {
  return (
    <div className="blog-container">
      <img src={imageUrl} alt="Blog Post" className="blog-image" />
      <div className="category">{category}</div>
      <h2 className="post-title">{title}</h2>
    </div>
  );
};

export default BlogContainer;