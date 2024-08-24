import React from "react";
import "./index.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home2() {
  const {
    isPending,
    error,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}
