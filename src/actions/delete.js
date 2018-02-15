import {API_BASE_URL} from '../config';

export const deleteFavorite = (userId,playerId) => dispatch => {
    return fetch(`${API_BASE_URL}/users/${userId}/favorites`, {
        method: 'delete'
    })
        .then(res => res.json())
        .catch(err => alert(err));
};
//deletes players in favorites from server