import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SAVE_SCORE = 'SAVE_SCORE';

export const saveScore = score => ({
	type: SAVE_SCORE,
	score
});

export const updateHighScore = (userId, highscore) => dispatch => {
	console.log(highscore);
	return (
		fetch(`${API_BASE_URL}/user/${userId}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({highscore: highscore}),
	    })
			.then(res => normalizeResponseErrors(res))
			.then(res => res.json())
			.catch(err => {
				console.log(err)
			})
	)
}