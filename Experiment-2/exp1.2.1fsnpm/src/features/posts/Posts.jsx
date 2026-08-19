import { useMemo } from "react";
import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard";

import {
  selectPublishedPosts,
  selectDraftPosts,
  totalPosts,
} from "./postsSelectors";

function Posts() {
  const publishedPosts = useSelector(selectPublishedPosts);
  const draftPosts = useSelector(selectDraftPosts);
  const total = useSelector(totalPosts);

  const publishedCount = useMemo(
    () => publishedPosts.length,
    [publishedPosts]
  );

  const draftCount = useMemo(
    () => draftPosts.length,
    [draftPosts]
  );

  return (
    <div>
      <h2>Posts Dashboard</h2>

      <div className="stats">
        <div className="stat-box">
          <h3>Total Posts</h3>
          <p>{total}</p>
        </div>

        <div className="stat-box">
          <h3>Published</h3>
          <p>{publishedCount}</p>
        </div>

        <div className="stat-box">
          <h3>Draft</h3>
          <p>{draftCount}</p>
        </div>
      </div>

      <h2>All Posts</h2>

      {publishedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {draftPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;