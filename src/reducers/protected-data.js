import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

const initialState = {
    data: [],
    stats: [],
    player: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        // let pts = [];
        // let players = [];
        // for(let i=0;i< action.data.stats.leagueDashPlayerStats.length;i++){
        //     //  pts = [...pts,action.data.stats.leagueDashPlayerStats[i].pts];
        //     //  players = [...players,action.data.stats.leagueDashPlayerStats[i].playerName];
        //     let mappedPTS = action.data.stats.leagueDashPlayerStats[i].pts.filter(pts => { 
        //         pts > 17;
        //         console.log(pts)
        //     })
        //     console.log(mappedPTS);
        //     }
            // pts.sort(function(a, b){return b-a});
            // console.log(pts);
        return Object.assign({}, state, {
            data: [...state.data,action.data.player],
            stats: action.data.stats,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
