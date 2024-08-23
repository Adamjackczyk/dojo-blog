import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import BlogList from "./BlogList";

export default function Home2() {
  const [blogs, setBlogs] = useState([
    { title: "My new site", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    return setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [blogs]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs!"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
}
