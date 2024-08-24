import React, { useState } from "react";

const BlogList = (props) => {
  const blogs = props.blogs;
  const { title } = props;

  const [name, setName] = useState("mario");
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* <button onClick={() => props.handleDelete(blog.id)}>
            delete blog
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
