import "./index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export default function App() {

  const markers = [
    { position: [13.7563, 100.5018], popup: "Marker 1: Bangkok" }, // Bangkok
    { position: [18.7877, 98.9931], popup: "Marker 2: Chiang Mai" }, // Chiang Mai
    { position: [7.8804, 98.3923], popup: "Marker 3: Phuket" }, // Phuket
  ];

  // const customIcon = new Icon({
  //   iconUrl: "",
  //   iconSize: [38, 38]
  // })
  return (
    <MapContainer center={[13.756, 100.5019]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map(markers=>(
        <Marker position={markers.position}/>
      ))
      }
    </MapContainer>
  );
}