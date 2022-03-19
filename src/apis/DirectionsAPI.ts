import axios from 'axios';

const directionsAPI = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZGFuaXBlcnR1eiIsImEiOiJja2t2Y25idGowZjF3Mndxa2Vnamo5MmM2In0.SLYknZEWoU76WnEF-2JWwQ'
    }
});

export default directionsAPI;