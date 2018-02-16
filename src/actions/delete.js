import {API_BASE_URL} from '../config';
import {fetchFavorites} from './favorites';

export const deleteFavorite = (userId,playerId) => dispatch => {
    return fetch(`${API_BASE_URL}/users/${userId}/favorites`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({playerId: playerId})
    })
        .then(res => res.json())
        .then(() => dispatch(fetchFavorites(userId)))
        .catch(err => alert(err));
};
