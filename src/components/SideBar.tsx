import User from "../interface/UserInterface";

interface SidebarProps {
  user: User | null;
}

const Sidebar = ({ user }: SidebarProps) => {
  return (
    <div style={{ width: '250px', backgroundColor: '#f0f0f0', padding: '10px' }}>
      
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li><a href="/dashboard">Dashboard</a></li>
        {user && (
        <div>
          <h2>User Details</h2>
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