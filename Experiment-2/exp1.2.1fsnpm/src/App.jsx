import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import Posts from "./features/posts/Posts";
import Platforms from "./features/platforms/Platforms";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />

      <h1>Redux Toolkit Social Media Manager</h1>

      <AddPost />

      <Posts />

      <Platforms />
    </div>
  );
}

export default App;