import { AddCity, DeleteCity } from '../constants';

function Cities(state = [], action) {
    switch (action.type) {
        case AddCity:
            return [...state, action.city];
        case DeleteCity:
            let filteredCities = state.filter((city, index) => index != action.cityIndex)
            state = filteredCities
            return state;
        default:
            return state
    }
}

export default Cities;