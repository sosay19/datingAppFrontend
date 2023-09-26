// ProfilePhotoUpload.tsx

import React, { useState } from 'react';

interface ProfilePhotoUploadProps {
    currentProfilePhoto: string; // URL of the current profile photo
    onPhotoUpload: (file: File) => void;
}

const ProfilePhotoUpload: React.FC<ProfilePhotoUploadProps> = ({
    currentProfilePhoto,
    onPhotoUpload,
}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);
    };

    const handleUploadClick = () => {
        if (selectedFile) {
            onPhotoUpload(selectedFile);
        }
    };

    return (
        <div className="profile-photo-upload">
            <h2>Profile Photo</h2>
            <img
                src={currentProfilePhoto}
                alt="Current Profile"
                className="current-profile-photo"
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
            />
            <button
                type="button"
                onClick={handleUploadClick}
                disabled={!selectedFile}
                className="upload-button"
            >
                Upload Photo
            </button>
        </div>
    );
};

export default ProfilePhotoUpload;
