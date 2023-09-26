// PrivacySecurity.tsx

import React, { useState } from 'react';

interface PrivacySecurityProps {
    initialPrivacySettings: {
        enableTwoFactorAuth: boolean;
        showEmailInProfile: boolean;
        // Add more privacy and security settings as needed
    };
    onUpdateSettings: (updatedSettings: {
        enableTwoFactorAuth: boolean;
        showEmailInProfile: boolean;
        // Add more privacy and security settings as needed
    }) => void;
}

const PrivacySecurity: React.FC<PrivacySecurityProps> = ({
    initialPrivacySettings,
    onUpdateSettings,
}) => {
    const [privacySettings, setPrivacySettings] = useState({
        enableTwoFactorAuth: initialPrivacySettings.enableTwoFactorAuth,
        showEmailInProfile: initialPrivacySettings.showEmailInProfile,
        // Initialize other privacy and security settings as needed
    });

    const handleToggle = (settingName: keyof typeof privacySettings) => {
        setPrivacySettings((prevSettings) => ({
            ...prevSettings,
            [settingName]: !prevSettings[settingName],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdateSettings(privacySettings);
    };

    return (
        <div className="privacy-security-settings">
            <h2>Privacy and Security Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="setting-option">
                    <label>
                        <input
                            type="checkbox"
                            name="enableTwoFactorAuth"
                            checked={privacySettings.enableTwoFactorAuth}
                            onChange={() => handleToggle('enableTwoFactorAuth')}
                        />
                        Enable Two-Factor Authentication
                    </label>
                </div>
                <div className="setting-option">
                    <label>
                        <input
                            type="checkbox"
                            name="showEmailInProfile"
                            checked={privacySettings.showEmailInProfile}
                            onChange={() => handleToggle('showEmailInProfile')}
                        />
                        Show Email in Profile
                    </label>
                </div>
                {/* Add more setting options for other privacy and security preferences as needed */}
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default PrivacySecurity;
