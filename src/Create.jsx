import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [ispending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history("/");
    });
  };

  return (
    <div className="create">
      <h2 className="blog">Create</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {ispending && <button disabled>Adding Blog...</button>}
        {!ispending && <button>Add Blog</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>Author is {author}</p>
      </form>
    </div>
  );
};

export default Create;
