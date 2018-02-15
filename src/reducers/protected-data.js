import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';
import {
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_ERROR
} from '../actions/favorites';

const initialState = {
    stats: [],
    favoritePlayers: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            stats: action.data.stats,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }else if (action.type === FETCH_FAVORITES_SUCCESS) {
        return Object.assign({}, state, {
            favoritePlayers: action.data,
            error: null
        });
    }else if (action.type === FETCH_FAVORITES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
