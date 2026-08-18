import { useEffect, useState } from "react";

function PostForm({
  selectedDate,
  editingPost,
  onAddPost,
  onUpdatePost,
  onCancel,
}) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setPlatform(editingPost.platform);
      setDate(editingPost.start.slice(0, 16));
    } else {
      setTitle("");
      setPlatform("Instagram");

      if (selectedDate) {
        setDate(
          selectedDate.includes("T")
            ? selectedDate.slice(0, 16)
            : `${selectedDate}T10:00`
        );
      }
    }
  }, [editingPost, selectedDate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !date) {
      alert("Please enter all required fields.");
      return;
    }

    const post = {
      title,
      platform,
      start: date,
    };

    if (editingPost) {
      onUpdatePost({
        ...editingPost,
        ...post,
      });
    } else {
      onAddPost(post);
    }

    setTitle("");
  };

  return (
    <div className="form-card">
      <h2>{editingPost ? "Edit Post" : "Schedule New Post"}</h2>

      <form onSubmit={handleSubmit}>
        <label>Post Title</label>

        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Platform</label>

        <select
          value={platform}
          onChange={(event) => setPlatform(event.target.value)}
        >
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Twitter</option>
          <option>LinkedIn</option>
        </select>

        <label>Date & Time</label>

        <input
          type="datetime-local"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <div className="form-buttons">
          <button type="submit">
            {editingPost ? "Update Post" : "Schedule Post"}
          </button>

          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;