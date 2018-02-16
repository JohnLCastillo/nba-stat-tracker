import {API_BASE_URL} from '../config';

export const deleteFavorite = (userId,playerId) => dispatch => {
    console.log(playerId);
    return fetch(`${API_BASE_URL}/users/${userId}/favorites`, {
        method: 'delete',
        body: JSON.stringify({playerId: playerId})
    })
        .then(res => res.json())
        .catch(err => alert(err));
};
