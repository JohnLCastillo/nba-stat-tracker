import {API_BASE_URL} from '../config';


export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const fetchFavoritesSuccess = data => ({
    type: FETCH_FAVORITES_SUCCESS,
    data
});

export const FETCH_FAVORITES_ERROR = 'FETCH_FAVORITES_ERROR';
export const fetchFavoritesError = error => ({
    type: FETCH_FAVORITES_ERROR,
    error
});

export const addFavorite = (playerId,userId) => {
    console.log(playerId)
    return fetch(`${API_BASE_URL}/users/${userId}/favorites`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({playerId})
    })
        .then(res => res.json())
        .catch(err => alert(err));
};

export const fetchFavorites = userId => dispatch => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/${userId}/favorites`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(data => dispatch(fetchFavoritesSuccess(data)))
        .catch(err => dispatch(fetchFavoritesError(err)));
};
