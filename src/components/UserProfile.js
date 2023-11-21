// UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.profilePicture} alt={`${user.name}'s Profile`} />
      <h2>{user.name}</h2>
      <div className="user-activity">
        <p>Antal Inskickade Deals: {user.submittedDeals}</p>
        <p>Antal Kommentarer: {user.comments}</p>
        <p>Övergripande Aktivitet: {user.overallActivity}</p>
      </div>
    </div>
  );
};

export default UserProfile;
