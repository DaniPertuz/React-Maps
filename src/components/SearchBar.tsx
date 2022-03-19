import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';

const SearchBar = () => {

    const debounceRef = useRef<NodeJS.Timeout>();

    const { searchPlacesByQuery } = useContext(PlacesContext);

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            searchPlacesByQuery(event.target.value);
        }, 3000);
    }

    return (
        <div className="search-container">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar lugar..."
                onChange={onQueryChanged}
            />

            <SearchResults />
        </div>
    );
}

export default SearchBar;