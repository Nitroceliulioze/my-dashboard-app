import User from "../interface/UserInterface";
import styled from 'styled-components';

interface SidebarProps {
  user: User | null;
}

const SideBarWrapper = styled.div`
width: 300px;
textAlign: center;
backgroundColor: white;
boxShadow: 10px -1px 5px -2px rgba(0,0,0,0.16);
`
const Sidebar = ({ user }: SidebarProps) => {
  return (
    <div className="sidebar">
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li><a href="/dashboard">Dashboard</a></li>
        {user && (
        <div>
          <h2>Hello {user.username}</h2>
          <img src='https://avatars.githubusercontent.com/u/102618622?v=4' alt='profile-pic'></img>
          <p>Name: {user.name}</p>
          <p>Company: {user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          
        </div>
      )}
        <li><a href="/blogs">Blogs</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;