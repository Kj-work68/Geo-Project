import "./index.css";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import Geo from "./Geo";



export default function App() {

  return (
    <div>
      <Geo/>
      <Markers/>
    </div>
  );
}