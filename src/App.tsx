import { useState, useEffect } from "react";
import Sidebar from "./components/SideBar";
import User from './interface/UserInterface';
import Blogs from "./components/Blogs";

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
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar user={user} />
      <div style={{ flex: "1", padding: "20px" }}>
        <Blogs user={user}/>
      </div>
    </div>
  );
}

export default App;
