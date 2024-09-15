import React from 'react';
import './YouTubeChannels.css'; // Custom CSS for the YouTube Channels section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const YouTubeChannels = () => {
  const channels = [
    {
      name: 'Board Education System Live Streaming',
      logo: '/logo.jpg', // Replace with actual logo URL
      description: 'Providing high-quality educational content for board exams.',
      url: 'https://www.youtube.com/@boardeducationsystem0/streams', // Replace with actual YouTube channel URL
    },
    {
      name: 'Board Education System Recorded Lectures',
      logo: '/logo.jpg', // Replace with actual logo URL
      description: 'Your go-to channel for comprehensive study materials and tutorials.',
      url: 'https://www.youtube.com/@boardeducationsystem0/playlists', // Replace with actual YouTube channel URL
    },
    // Add more channels as needed
  ];

  return (
    <div className="youtube-channels-section container">
      <h2 className="section-title">Our YouTube Channels</h2>
      <div className="row">
        {channels.map((channel, index) => (
          <div key={index} className="col-md-6 col-lg-4 channel-box">
            <div className="channel-card">
              <img src={channel.logo} alt={channel.name} className="channel-logo" />
              <h4 className="channel-title">{channel.name}</h4>
              <p className="channel-description">{channel.description}</p>
              <a href={channel.url} target="_blank" rel="noopener noreferrer" className="channel-link">
                <FontAwesomeIcon icon={faYoutube} className="youtube-icon" /> Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeChannels;
