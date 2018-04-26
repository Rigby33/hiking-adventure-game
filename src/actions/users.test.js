import {registerUser} from './users';
import {API_BASE_URL} from '../config';

describe('registerUser', () => {
    it('Should call post on /user', () => {
    	const username = 'newuse';
    	const password = 'newpassword';
        const highscore = 100;
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return {username, password, highscore};
                }
            })
        );

        const dispatch = jest.fn();
        return registerUser({username, password, highscore})(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/user`, {
            	method: 'POST',
            	headers: {
            		'content-type': 'application/json'
            	},
            	body: JSON.stringify({user: {username, password, highscore}})
            });
        });
    });
});