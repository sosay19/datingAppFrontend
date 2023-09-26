import React from 'react';

interface UserProfileProps {
    user: {
        username: string;
        email: string;
        bio: string;
        profileImage: string;
        // Add more user profile fields as needed
    };
}
/*
Background: White or a light color for the user profile card.
Font size: Use a readable font size for user information.
Profile picture: Display the user's profile picture prominently.
Buttons: Apply the call-to-action color (e.g., passionate red) for action buttons (e.g., "Like," "Message").
*/
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <div className="user-profile bg-white rounded-lg p-4 shadow-md">
            <div className="profile-header flex items-center">
                <img
                    src={user.profileImage}
                    alt={`${user.username}'s Profile`}
                    className="profile-image h-16 w-16 rounded-full mr-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{user.username}</h2>
            </div>
            <div className="profile-details mt-4">
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Bio: {user.bio}</p>
                {/* Add more profile details as needed */}
            </div>
        </div>
    );
};

export default UserProfile;
