// SocialMediaSharing.tsx

import React from 'react';

interface SocialMediaSharingProps {
  url: string; // The URL to share
  text: string; // The text to share
}

const SocialMediaSharing: React.FC<SocialMediaSharingProps> = ({ url, text }) => {
  const handleShareOnFacebook = () => {
    // Create a Facebook share URL with the provided URL and text
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const handleShareOnTwitter = () => {
    // Create a Twitter share URL with the provided URL and text
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterShareUrl, '_blank');
  };

  return (
    <div className="social-media-sharing">
      <button onClick={handleShareOnFacebook}>Share on Facebook</button>
      <button onClick={handleShareOnTwitter}>Share on Twitter</button>
    </div>
  );
};

export default SocialMediaSharing;
