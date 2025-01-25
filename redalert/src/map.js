import React, { useEffect, useState } from 'react';

const Map = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.log(error)
    );
  }, []);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <iframe
        title="map"
        width="100%"
        height="100%"
        src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=10&output=embed`}
        frameBorder="0"
        style={{ border: '0' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
