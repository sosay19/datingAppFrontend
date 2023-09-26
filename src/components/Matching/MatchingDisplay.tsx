// MatchingDisplay.tsx

import React, { useState } from 'react';

interface MatchedProfile {
  id: number;
  name: string;
  description: string;
  // Add more profile properties as needed
}

interface MatchingDisplayProps {
  matchedProfiles: MatchedProfile[];
}

const MatchingDisplay: React.FC<MatchingDisplayProps> = ({ matchedProfiles }) => {
  const [selectedProfile, setSelectedProfile] = useState<MatchedProfile | null>(null);

  const handleProfileClick = (profile: MatchedProfile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="matching-display">
      <div className="profile-list">
        {matchedProfiles.map((profile) => (
          <div
            key={profile.id}
            className={`profile-item ${selectedProfile === profile ? 'selected' : ''}`}
            onClick={() => handleProfileClick(profile)}
          >
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
          </div>
        ))}
      </div>
      <div className="profile-details">
        {selectedProfile && (
          <>
            <h2>Selected Profile</h2>
            <h3>{selectedProfile.name}</h3>
            <p>{selectedProfile.description}</p>
            {/* Display more profile details here */}
          </>
        )}
      </div>
    </div>
  );
};

export default MatchingDisplay;
