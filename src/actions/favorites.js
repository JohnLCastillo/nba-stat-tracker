import {API_BASE_URL} from '../config';

export const addFavorite = (player,userId) => dispatch => {
    return fetch(`${API_BASE_URL}/users/${userId}/favorites`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(player)
    })
        .then(res => res.json())
        .catch(err => alert(err));
};