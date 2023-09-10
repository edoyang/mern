import React from 'react';
import './index.scss';

const BackgroundVideo = ({ link, children }) => {
  return (
    <div className="parent-container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={link} type="video/mp4" />
        Your browser doesn't support the video tag.
      </video>
      <div className="content-overlay">
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;
