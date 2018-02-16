import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';
import {
    FETCH_FAVORITES_SUCCESS,
    ADD_FAVORITES_SUCCESS,
    FETCH_FAVORITES_ERROR,
    FILTER
} from '../actions/favorites';


const initialState = {
    allStats: [],
    favoritePlayerId: [],
    favoritePlayers: [],
    filteredNames: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            allStats: action.data.stats,
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
    }else if (action.type === ADD_FAVORITES_SUCCESS) {
        return Object.assign({}, state, {
            favoritePlayerId: action.data,
            error: null
        });
    }else if (action.type === FETCH_FAVORITES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }else if (action.type === FILTER) {
        console.log(action.data)
        let filteredNames = state.allStats.filter(player => player.playerName.includes(action.data));
        return Object.assign({}, state, {
            filteredNames : filteredNames
        });
    }
    return state;
}
