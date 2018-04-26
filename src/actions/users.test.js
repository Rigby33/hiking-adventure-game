import {registerUser} from './users';
import {API_BASE_URL} from '../config';

describe('registerUser', () => {
    it('Should call post on /user', () => {
    	const user = {username: 'newuser', password: 'password'};
        const highscore = 100;
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return JSON.stringify({user, highscore});
                }
            })
        );

        const dispatch = jest.fn();
        return registerUser()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/user`, {
            	method: 'POST',
            	headers: {
            		'content-type': 'application/json'
            	},
            	body: {user, highscore}
            });
        });
    });
});