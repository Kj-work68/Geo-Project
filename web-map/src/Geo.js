import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'; // Ensure to create App.css with appropriate styles

const GeoJsonMap = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch(`${window.location.origin}/polygon-samples.geojson`)
      .then(response => response.json())
      .then(data => setGeoData(data))
      .catch(error => console.error('Error fetching geojson data:', error));
  }, []);

  return (
    <div>
      <MapContainer center={[48.4280529,-71.0684923
                    ]} zoom={13} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {geoData && <GeoJSON data={geoData} />}
      </MapContainer>
    </div>
  );
};

export default GeoJsonMap;
