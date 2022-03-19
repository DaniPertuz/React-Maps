import { useEffect, useReducer } from 'react';
import { searchAPI } from '../../apis';
import { PlacesContext } from '../../context';
import { getUserLocation } from '../../helpers';
import { PlacesReducer } from './PlacesReducer';
import { Feature, PlacesResponse } from '../../interfaces/placesInterface';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number];
    isLoadingPlaces: boolean;
    places: Feature[];
}

const initialState: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
};

interface Props {
    children: JSX.Element | JSX.Element[];
}

const PlacesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(PlacesReducer, initialState);

    useEffect(() => {
        getUserLocation()
            .then(lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }));
    }, []);

    const searchPlacesByQuery = async (query: string): Promise<Feature[]> => {
        if (!state.userLocation) throw new Error("No hay ubicación del usuario");

        if (query.length === 0) {
            dispatch({ type: 'setPlaces', payload: [] });
            return [];
        }

        dispatch({ type: 'setLoadingPlaces' });

        const resp = await searchAPI.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        });

        dispatch({ type: 'setPlaces', payload: resp.data.features });
        return resp.data.features;
    }

    return (
        <PlacesContext.Provider
            value={{
                ...state,
                searchPlacesByQuery
            }}
        >
            {children}
        </PlacesContext.Provider>
    );
}

export default PlacesProvider;