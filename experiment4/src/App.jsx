import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import Calendar from "./components/Calendar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

import "./App.css";

const defaultPosts = [
  {
    id: "1",
    title: "Instagram Post",
    start: "2026-08-18T10:00:00",
    platform: "Instagram",
  },
  {
    id: "2",
    title: "Product Announcement",
    start: "2026-08-20T14:00:00",
    platform: "Facebook",
  },
  {
    id: "3",
    title: "Weekend Promotion",
    start: "2026-08-22T11:30:00",
    platform: "Twitter",
  },
];

function App() {
  const [posts, setPosts] = useState(() => {
    const savedPosts =
      localStorage.getItem("scheduledPosts");

    return savedPosts
      ? JSON.parse(savedPosts)
      : defaultPosts;
  });

  const [selectedDate, setSelectedDate] =
    useState("");

  const [editingPost, setEditingPost] =
    useState(null);

  const [showForm, setShowForm] =
    useState(false);

  useEffect(() => {
    localStorage.setItem(
      "scheduledPosts",
      JSON.stringify(posts)
    );
  }, [posts]);

  const totalPosts = useMemo(() => {
    return posts.length;
  }, [posts]);

  const handleAddPost = useCallback((post) => {
    setPosts((previousPosts) => [
      ...previousPosts,
      {
        ...post,
        id: Date.now().toString(),
      },
    ]);

    setSelectedDate("");
    setShowForm(false);
  }, []);

  const handleUpdatePost = useCallback(
    (updatedPost) => {
      setPosts((previousPosts) =>
        previousPosts.map((post) =>
          post.id === updatedPost.id
            ? updatedPost
            : post
        )
      );

      setEditingPost(null);
      setShowForm(false);
    },
    []
  );

  const handleDeletePost = useCallback((id) => {
    setPosts((previousPosts) =>
      previousPosts.filter(
        (post) => post.id !== id
      )
    );
  }, []);

  const handleDateSelect = useCallback(
    (date) => {
      setSelectedDate(date);
      setEditingPost(null);
      setShowForm(true);
    },
    []
  );

  const handleEditPost = useCallback((post) => {
    setEditingPost(post);
    setSelectedDate("");
    setShowForm(true);
  }, []);

  const handleMovePost = useCallback(
    (id, newStart) => {
      setPosts((previousPosts) =>
        previousPosts.map((post) =>
          post.id === id
            ? {
                ...post,
                start: newStart,
              }
            : post
        )
      );
    },
    []
  );

  const handleAddButton = () => {
    setEditingPost(null);
    setSelectedDate("");
    setShowForm(true);
  };

  const handleCancel = () => {
    setSelectedDate("");
    setEditingPost(null);
    setShowForm(false);
  };

  return (
    <div className="app">

      <header className="header">
        <h1>
          Social Media Post Scheduler
        </h1>

        <p>
          Interactive calendar with
          performance optimization and testing
        </p>
      </header>

      <div className="stats">
        <div className="stat-card">
          <h3>
            Total Scheduled Posts
          </h3>

          <p>{totalPosts}</p>
        </div>
      </div>

      <main className="main-container">

        <div className="add-post-container">
          <button
            className="add-post-button"
            onClick={handleAddButton}
          >
            + Add Post
          </button>
        </div>

        <Calendar
          posts={posts}
          onDateSelect={handleDateSelect}
          onEditPost={handleEditPost}
          onMovePost={handleMovePost}
        />

        {showForm && (
          <PostForm
            selectedDate={selectedDate}
            editingPost={editingPost}
            onAddPost={handleAddPost}
            onUpdatePost={handleUpdatePost}
            onCancel={handleCancel}
          />
        )}

        <PostList
          posts={posts}
          onEditPost={handleEditPost}
          onDeletePost={handleDeletePost}
        />

      </main>
    </div>
  );
}

export default App;