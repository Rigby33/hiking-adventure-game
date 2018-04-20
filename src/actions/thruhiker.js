import { API_BASE_URL } from '../config';

export const THRU_HIKER = 'THRU_HIKER';
export const thruHikerAction = users => ({
	type: THRU_HIKER,
	users
});

export const thruHikerData = () => dispatch => {
	return (
		fetch(`${API_BASE_URL}/user`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
	        .then(res => {
	            if (!res.ok) {
	                return Promise.reject(res.statusText);
	            }
	            return res.json();
	        })
	        .then(users => {
	        	console.log(users);
	        	return dispatch(thruHikerAction(users))
	        })
	)
}