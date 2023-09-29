import { useState, useEffect } from "react";
import Sidebar from "./components/SideBar";
import User from './interface/UserInterface';
import Blogs from "./components/Blogs";
import EditPost from "./components/EditPost";

const App = () => {
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

  console.log(user);
  return (
    <div style={{ display: "flex" }}>
      {/* {user.name} */}
      <Sidebar user={user} />
      <div className="content">
        <Blogs user={user}/> 
        {/* <EditPost user={user}/> */}
      </div>
    </div>
  );
};

export default App;
