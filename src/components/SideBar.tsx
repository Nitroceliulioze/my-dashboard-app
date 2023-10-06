import { Link } from "react-router-dom";
import User from "../interface/UserInterface";

interface SidebarProps {
  user: User | null;
}

const Sidebar = ({ user }: SidebarProps) => {
  return (
    <div className="sidebar">
      <ul style={{ listStyle: "none", padding: "0" }}>
        {user && (
          <div>
            <h2>Hello {user.username}</h2>
            <img
              src="https://avatars.githubusercontent.com/u/102618622?v=4"
              alt="profile-pic"
            ></img>
            <p>Name: {user.name}</p>
            <p>Company: {user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
          </div>
        )}
      </ul>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Link to="/">Dashboard</Link>
        <Link to="/blogs">User Blog Posts</Link>
      </div>
    </div>
  );
};

export default Sidebar;
