import axios from 'axios';

const searchAPI = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZGFuaXBlcnR1eiIsImEiOiJja2t2Y25idGowZjF3Mndxa2Vnamo5MmM2In0.SLYknZEWoU76WnEF-2JWwQ'
    }
});

export default searchAPI;