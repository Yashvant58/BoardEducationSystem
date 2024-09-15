import React, { useEffect, useState } from 'react';
import './YouTubePlaylistsClass12.css';

const YouTubePlaylistsClass12 = () => {
  const [playlists, setPlaylists] = useState([]);
  const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with your actual YouTube API key
  const CHANNEL_ID = 'UC2ThoFQmqWOrt147kdz1n7Q'; // Your channel ID

  useEffect(() => {
    // Fetch the playlists from YouTube API
    const fetchPlaylists = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`
        );
        const data = await response.json();
        // Check if data.items is defined and is an array
        if (Array.isArray(data.items)) {
          setPlaylists(data.items);
        } else {
          console.error('Unexpected data structure:', data);
          setPlaylists([]);
        }
      } catch (error) {
        console.error("Error fetching the playlists:", error);
        setPlaylists([]);
      }
    };

    fetchPlaylists();
  }, [API_KEY, CHANNEL_ID]);

  return (
    <div className="playlist-container">
      {playlists.length === 0 ? (
        <p>Loading playlists...</p>
      ) : (
        playlists.map((playlist) => (
          <div key={playlist.id} className="card">
            <a href={`https://www.youtube.com/playlist?list=${playlist.id}`} target="_blank" rel="noopener noreferrer">
              <img
                src={playlist.snippet.thumbnails.high.url}
                alt={playlist.snippet.title}
                className="thumbnail"
              />
              <h3 className="playlist-title">{playlist.snippet.title}</h3>
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default YouTubePlaylistsClass12;
