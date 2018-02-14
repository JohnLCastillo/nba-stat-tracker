import {API_BASE_URL} from '../config';

export const addFavorite = (playerId,userId) => dispatch => {
    return fetch(`${API_BASE_URL}/users/${userId}/favorites`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(playerId)
    })
        .then(res => res.json())
        .catch(err => alert(err));
};