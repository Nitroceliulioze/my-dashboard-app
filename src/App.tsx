import { useState, useEffect } from "react";
import Sidebar from "./components/SideBar";
import User from "./interface/UserInterface";
import Blogs from "./components/Blogs";
import Post from "./interface/PostInterface";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const randomUserId = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `${process.env.BASE_URL}/users/${randomUserId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }

    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `${process.env.BASE_URL}/users/${user?.id}/posts`
        );
        const allPosts = await response.json();
        setUserPosts(allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    if (user?.id) {
      fetchPosts();
    }
  }, [user?.id]);

  const handleEditPost = (
    postId: number,
    newTitle: string,
    newBody: string
  ) => {
    setUserPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, title: newTitle, body: newBody } : post
      )
    );
  };

  const handleDeletePost = (postId: number) => {
    setUserPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar user={user} />
      <div className="content">
        <Blogs
          userposts={userPosts}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
        />
      </div>
    </div>
  );
}

export default App;
