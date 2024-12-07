import React, { useState } from 'react';
import Dashboard from './dashboard/dashboard';

const Profile = ({ user }) => {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleButtonClick = () => {
    console.log('Button clicked!');
    alert('Button clicked!');
    setShowDashboard(!showDashboard); // Toggle Dashboard visibility
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Profile Page</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Favorite Season:</strong> {user.favoriteSeason}</p>

      <button onClick={handleButtonClick} style={{ marginTop: '20px' }}>
        {showDashboard ? 'Hide Dashboard' : 'Show Dashboard'}
      </button>

      {showDashboard && (
        <div style={{ marginTop: '20px' }}>
          <Dashboard />
        </div>
      )}
    </div>
  );
};

export default Profile;