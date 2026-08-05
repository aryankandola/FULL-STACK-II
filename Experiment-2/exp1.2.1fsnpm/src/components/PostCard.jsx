import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";

function PostCard({ post }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h3>{post.title}</h3>

      <p>
        <strong>Platform:</strong> {post.platform}
      </p>

      <p>
        <strong>Status:</strong> {post.status}
      </p>

      <button onClick={() => dispatch(deletePost(post.id))}>
        Delete
      </button>
    </div>
  );
}

export default React.memo(PostCard);