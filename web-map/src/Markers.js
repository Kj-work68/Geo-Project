import React from 'react'
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet"
function Markers() {
    const markers = [
        { position: [48.4372764, -71.0694204], popup: "Marker 1: Poste-de-traite-de-Chicoutimi" }, // Bangkok
        { position: [48.4287351, -71.0773537], popup: "Marker 2: CEM" }, // Chiang Mai
        { position: [48.4293435, -71.0656554], popup: "Marker 3: Vieux-port de Chicoutimi" }, // Phuket
      ];
  return (
    <MapContainer center={[48.4280529,-71.0684923]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    
      
      {markers.map(markers=>(
        <Marker position={markers.position}></Marker>
      ))
      }
     
      
    </MapContainer>
  );
};

export default Markers
