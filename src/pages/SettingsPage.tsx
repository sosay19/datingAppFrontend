// SettingsPage.tsx

import React, { useState } from 'react';

interface SettingsPageProps {
    // You can add any necessary props here
}

const SettingsPage: React.FC<SettingsPageProps> = ({ }) => {
    // Define state variables for user settings
    const [emailNotifications, setEmailNotifications] = useState<boolean>(true);
    const [pushNotifications, setPushNotifications] = useState<boolean>(true);
    const [theme, setTheme] = useState<string>('light');

    // Function to handle changes in email notifications
    const handleEmailNotificationsChange = () => {
        setEmailNotifications((prevValue) => !prevValue);
    };

    // Function to handle changes in push notifications
    const handlePushNotificationsChange = () => {
        setPushNotifications((prevValue) => !prevValue);
    };

    // Function to handle changes in theme
    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
    };

    return (
        <div className="settings-page">
            <h2>Settings</h2>
            <div className="setting-option">
                <label>
                    <input
                        type="checkbox"
                        checked={emailNotifications}
                        onChange={handleEmailNotificationsChange}
                    />
                    Receive Email Notifications
                </label>
            </div>
            <div className="setting-option">
                <label>
                    <input
                        type="checkbox"
                        checked={pushNotifications}
                        onChange={handlePushNotificationsChange}
                    />
                    Receive Push Notifications
                </label>
            </div>
            <div className="setting-option">
                <label>
                    Theme:
                    <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </label>
            </div>
            {/* Add more setting options as needed */}
        </div>
    );
};

export default SettingsPage;
