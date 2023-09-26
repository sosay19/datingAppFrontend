// EditProfile.tsx

import React, { useState } from 'react';

interface EditProfileProps {
  userProfile: {
    username: string;
    email: string;
    bio: string;
    // Add more user profile fields as needed
  };
  onUpdateProfile: (updatedProfile: {
    username: string;
    email: string;
    bio: string;
    // Add more user profile fields as needed
  }) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ userProfile, onUpdateProfile }) => {
  const [updatedProfile, setUpdatedProfile] = useState({
    username: userProfile.username,
    email: userProfile.email,
    bio: userProfile.bio,
    // Initialize other profile fields as needed
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(updatedProfile);
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={updatedProfile.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={updatedProfile.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={updatedProfile.bio}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more form fields for other profile information as needed */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
