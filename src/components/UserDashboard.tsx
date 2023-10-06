import User from "../interface/UserInterface";

interface DashboardProps {
  user: User | null;
}

const Dashboard = ({ user }: DashboardProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      {user && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <h2>Hello {user.username}</h2>
          <img className="profile-pic"
            src="https://avatars.githubusercontent.com/u/102618622?v=4"
            alt="profile-pic"
          ></img>
          <p>Name: {user.name}</p>
          <p>Company: {user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
