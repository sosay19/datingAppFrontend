// NotificationsSettings.tsx

import React, { useState } from 'react';

interface NotificationsSettingsProps {
  initialNotificationSettings: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    // Add more notification settings as needed
  };
  onUpdateSettings: (updatedSettings: {
    emailNotifications: boolean;
    pushNotifications: boolean;
  }) => void;
}

const NotificationsSettings: React.FC<NotificationsSettingsProps> = ({
  initialNotificationSettings,
  onUpdateSettings,
}) => {
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: initialNotificationSettings.emailNotifications,
    pushNotifications: initialNotificationSettings.pushNotifications,
    // Initialize other notification settings as needed
  });

  const handleToggle = (settingName: keyof typeof notificationSettings) => {
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      [settingName]: !prevSettings[settingName],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSettings(notificationSettings);
  };

  return (
    <div className="notifications-settings">
      <h2>Notifications Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="setting-option">
          <label>
            <input
              type="checkbox"
              name="emailNotifications"
              checked={notificationSettings.emailNotifications}
              onChange={() => handleToggle('emailNotifications')}
            />
            Receive Email Notifications
          </label>
        </div>
        <div className="setting-option">
          <label>
            <input
              type="checkbox"
              name="pushNotifications"
              checked={notificationSettings.pushNotifications}
              onChange={() => handleToggle('pushNotifications')}
            />
            Receive Push Notifications
          </label>
        </div>
        {/* Add more setting options for other notification preferences as needed */}
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default NotificationsSettings;
