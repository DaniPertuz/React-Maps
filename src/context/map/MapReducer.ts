import { Map, Marker } from 'mapbox-gl';
import { MapState } from './MapProvider';

type MapAction =
    | { type: 'setMap', payload: Map }
    | { type: 'setMarkers', payload: Marker[] };

export const MapReducer = (state: MapState, { type, payload }: MapAction): MapState => {
    switch (type) {
        case 'setMap':
            return {
                ...state,
                isMapReady: true,
                map: payload
            }
        
        case 'setMarkers':
            return {
                ...state,
                markers: payload
            }
    
        default:
            return state;
    }
}