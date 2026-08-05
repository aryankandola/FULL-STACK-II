import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

function AddPost() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("Twitter");
  const [status, setStatus] = useState("Draft");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    dispatch(
      addPost({
        id: Date.now(),
        title,
        platform,
        status,
      })
    );

    setTitle("");
    setPlatform("Twitter");
    setStatus("Draft");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option>Twitter</option>
        <option>Instagram</option>
        <option>Facebook</option>
        <option>LinkedIn</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Draft</option>
        <option>Published</option>
      </select>

      <button>Add Post</button>
    </form>
  );
}

export default AddPost;