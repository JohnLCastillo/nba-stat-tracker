import {API_BASE_URL} from '../config';


export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const fetchFavoritesSuccess = data => ({
    type: FETCH_FAVORITES_SUCCESS,
    data
});

export const ADD_FAVORITES_SUCCESS = 'ADD_FAVORITES_SUCCESS';
export const addFavoritesSuccess = data => ({
    type: ADD_FAVORITES_SUCCESS,
    data
});

export const FETCH_FAVORITES_ERROR = 'FETCH_FAVORITES_ERROR';
export const fetchFavoritesError = error => ({
    type: FETCH_FAVORITES_ERROR,
    error
});

export const addFavorite = (playerId,userId) => dispatch => {
    return fetch(`${API_BASE_URL}/users/${userId}/favorites`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({playerId})
    })
        .then(data => dispatch(addFavoritesSuccess(data)))
        .catch(err => dispatch(fetchFavoritesError(err)));
};

export const fetchFavorites = userId => dispatch => {
    return fetch(`${API_BASE_URL}/users/${userId}/favorites`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => dispatch(fetchFavoritesSuccess(data)))
        .catch(err => dispatch(fetchFavoritesError(err)));
};
