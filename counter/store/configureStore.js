import { createStore, combineReducers } from 'redux';
import countReducer from '../reducers/countReducer';
import Cities from '../reducers/Cities';

const rootReducer = combineReducers({
    count: countReducer,
    cities: Cities
});

export const configureStore = createStore(rootReducer)
