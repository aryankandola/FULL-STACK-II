import { memo } from "react";

function PostList({
  posts,
  onEditPost,
  onDeletePost,
}) {
  return (
    <section className="post-list">
      <h2>Scheduled Posts</h2>

      {posts.length === 0 ? (
        <p>No scheduled posts.</p>
      ) : (
        posts.map((post) => (
          <div className="post-item" key={post.id}>
            <div>
              <h3>{post.title}</h3>

              <p>
                Platform: {post.platform}
              </p>

              <p>
                Scheduled:{" "}
                {new Date(post.start).toLocaleString()}
              </p>
            </div>

            <div className="post-actions">
              <button onClick={() => onEditPost(post)}>
                Edit
              </button>

              <button
                className="delete-button"
                onClick={() => onDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default memo(PostList);