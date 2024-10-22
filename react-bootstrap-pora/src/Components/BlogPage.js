import React from "react";

const BlogPage = () => {
  return (
    <div className="container">
      <h1>ブログ</h1>

      <p>{Array(100).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit .").join('')}</p>
    </div>
  );
};

export default BlogPage;