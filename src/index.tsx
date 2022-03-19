import React from 'react';
import ReactDOM from 'react-dom';
import MapsApp from './MapsApp';
import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaXBlcnR1eiIsImEiOiJjbDB3ejd3OHgxOW9jM2NtdW1qMXlhYTRiIn0.uITleM8cLFHfJDuoHda3DA';

if (!navigator.geolocation) {
  alert('Navegador no tiene acceso a geolocalización');
  throw new Error('Navegador no tiene acceso a geolocalización');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);