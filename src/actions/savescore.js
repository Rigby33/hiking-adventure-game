import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SAVE_SCORE = 'SAVE_SCORE';

export const saveScore = () => ({
	type: SAVE_SCORE,
});

export const GO_TO_THRUHIKERS = 'GO_TO_THRUHIKERS';

export const goToThruhikers = () => ({
	type: GO_TO_THRUHIKERS
})

export const updateHighScore = (userId, highscore) => dispatch => {
	return (
		fetch(`${API_BASE_URL}/user/${userId}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({highscore: highscore}),
	    })
			.then(res => normalizeResponseErrors(res))
			.then((res) => res.json().then(dispatch(saveScore())))
			.catch(err => {
				console.log(err)
			})
	)
}