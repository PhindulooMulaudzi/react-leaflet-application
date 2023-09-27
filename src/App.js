import './App.css';
import 'leaflet/dist/leaflet.css';

import {MapContainer, TileLayer} from 'react-leaflet';

function App () {
  const mapCenter = [-26.1856819, 28.0537364];
  return (
    <MapContainer center={[mapCenter[0], mapCenter[1]]} zoom={13}>
      <TileLayer
        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default App;
