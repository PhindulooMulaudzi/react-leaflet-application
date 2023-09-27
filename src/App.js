import './App.css';
import 'leaflet/dist/leaflet.css';

import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';
import {Icon, divIcon, point} from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

function App () {
  const mapCenter = [-26.1856819, 28.0537364];
  const mapMarkers = [
    {
      geocode: [-26.18, 28.05],
      popup: 'Hello, i am popup 1',
    },
    {
      geocode: [-26.17, 28.04],
      popup: 'Hello, i am popup 2',
    },
    {
      geocode: [-26.19, 28.05],
      popup: 'Hello, i am popup 3',
    },
  ];

  const customIcon = new Icon ({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/186/186250.png',
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = cluster => {
    return new divIcon ({
      html: `<div class="cluster-icon">${cluster.getChildCount ()}</div>`,
      className: 'custom-marker-cluster',
      iconSize: point (33, 33, true),
    });
  };

  return (
    <MapContainer center={[mapCenter[0], mapCenter[1]]} zoom={13}>
      <TileLayer
        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {mapMarkers.map (marker => {
          return (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
