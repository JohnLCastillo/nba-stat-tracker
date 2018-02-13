import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

const initialState = {
    data: [],
    stats: [],
    PPG: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        for(let i=0;i< action.data.stats.leagueDashPlayerStats.length;i++){
            let pts = action.data.stats.leagueDashPlayerStats[i].pts;
            let player = action.data.stats.leagueDashPlayerStats[i].playerName;
            console.log(pts);
        }
        return Object.assign({}, state, {
            data: [...state.data,action.data.player],
            stats: [...state.stats,action.data.stats],
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
