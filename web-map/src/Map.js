import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css'; // Ensure to create App.css with appropriate styles
import { Icon, DivIcon } from "leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';


const GeoJsonMap = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch(`${window.location.origin}/polygon-samples.geojson`)
      .then(response => response.json())
      .then(data => setGeoData(data))
      .catch(error => console.error('Error fetching geojson data:', error));
  }, []);

  const markers = [
    { position: [48.4372764, -71.0694204], popup: " Poste-de-traite-de-Chicoutimi" }, // Bangkok
    { position: [48.4287351, -71.0773537], popup: " CEM" }, // Chiang Mai
    { position: [48.4293435, -71.0656554], popup: " Vieux-port de Chicoutimi" }, // Phuket
  ];

  const customIcon = new Icon({
    iconUrl: require("./img/location.png"),
    iconSize: [38, 38] 
  });

 
  return (
    <div>
    
      <MapContainer center={[48.4280529,-71.0684923
                    ]} zoom={13} style={{ height: '90vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

<MarkerClusterGroup>
        {geoData && <GeoJSON data={geoData} />}

        {markers.map(markers=>(
        <Marker position={markers.position} icon={customIcon}>
            <Popup>
               {markers.popup}
            </Popup>
        </Marker>
      ))
      }

</MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default GeoJsonMap;
