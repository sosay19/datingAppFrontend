// UserProfilePage.tsx

import React, { useState } from 'react';
import UserProfile from './UserProfile'; // Create a UserProfile component for displaying the profile
import EditProfile from './EditProfile'; // Create an EditProfile component for editing the profile

interface UserProfilePageProps {
  // You can add any necessary props here
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // User profile data (replace with actual user data)
  const userProfile = {
    username: 'john_doe',
    email: 'john@example.com',
    bio: 'Front-end developer',
    // Add more user profile fields as needed
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFinishEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="user-profile-page">
      <h2>User Profile</h2>
      {isEditing ? (
        <EditProfile
          userProfile={userProfile}
          onFinishEditing={handleFinishEditing}
        />
      ) : (
        <>
          <UserProfile user={userProfile} />
          <button onClick={handleEditClick}>Edit Profile</button>
        </>
      )}
    </div>
  );
};

export default UserProfilePage;
