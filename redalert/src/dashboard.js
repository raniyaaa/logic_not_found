import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  if (!user) {
    return <p>Please log in to view your dashboard.</p>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <img src={user.profilePicture} alt="Profile" />
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
