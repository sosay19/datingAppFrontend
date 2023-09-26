// AccountSettings.tsx

import React, { useState } from 'react';

interface AccountSettingsProps {
  user: {
    username: string;
    email: string;
    // Add more user properties as needed
  };
  onUpdateAccount: (updatedAccountInfo: { username: string; email: string }) => void;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ user, onUpdateAccount }) => {
  const [updatedAccountInfo, setUpdatedAccountInfo] = useState({
    username: user.username,
    email: user.email,
    // Initialize other account properties as needed
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedAccountInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateAccount(updatedAccountInfo);
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={updatedAccountInfo.username}
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
            value={updatedAccountInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more form fields for other account settings as needed */}
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
};

export default AccountSettings;
