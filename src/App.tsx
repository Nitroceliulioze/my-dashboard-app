import { useState, useEffect } from "react";
import Sidebar from "./components/SideBar";
import User from "./interface/UserInterface";
import Blogs from "./components/Blogs";
import Post from "./interface/PostInterface";



function App() {
  const [user, setUser] = useState<User | null>(null);
  const randomUserId = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/users/${randomUserId}`
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
  }, [randomUserId]);

  const [userPosts, setUserPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/users/${user?.id}/posts`
        );
        const allPosts = await response.json();
        console.log(allPosts);

        setUserPosts(allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, [user?.id]);

  const edit = () => {
    console.log("from APP");
  };
  console.log(user);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar user={user} />
      <div className="content">
        <Blogs userposts={userPosts} onEditClick={edit} />
      </div>
    </div>
  );
}

export default App;
