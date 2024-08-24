import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import BlogList from "./BlogList";

export default function Home2() {
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setBlogs(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   return setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs!"
        handleDelete={handleDelete}
      /> */}
      {/* <button onClick={() => setName("luigi")}>change name</button> */}
      <p>{name}</p>
    </div>
  );
}
