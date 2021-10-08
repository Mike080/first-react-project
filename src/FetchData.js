import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch('https://itunes.apple.com/')
      .then((res) => res.json())
      .then((result) => setTracks(result));
  }, []);

  return (
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>{track.title}</li>
      ))}
    </ul>
  );
};

export default FetchData;
