// UserDashboardContainer.js
import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';

const UserDashboardContainer = ({ userId }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user details from the API based on userId (adjust as needed)
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/user/${userId}`);
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error(`Error fetching user details for userId ${userId}:`, error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="user-dashboard-container">
      {userDetails ? (
        <UserProfile user={userDetails} />
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDashboardContainer;
