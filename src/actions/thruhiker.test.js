import {THRU_HIKER, thruHikerAction, thruHikerData} from './thruhiker';
import { API_BASE_URL } from '../config';

describe('thruHikerAction', () => {
	it('should return action', () => {
		const users = [
		{
			username: 'newuser',
			highscore: 100
		},
		{
			username: 'newuser2',
			highscore: 200
		}
		];
		const action = thruHikerAction(users);
		expect(action.type).toEqual(THRU_HIKER);
		expect(action.users).toEqual(users);
	})
})


describe('thruHikerData', () => {
    it('Should dispatch fetchBoardSuccess', () => {
		const users = [
		{
			username: 'newuser',
			highscore: 100
		},
		{
			username: 'newuser2',
			highscore: 200
		}
		];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return users;
                }
            })
        );

        const dispatch = jest.fn();
        return thruHikerData()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/user`, {
            	method: 'GET',
            	headers: {
            		'content-type': 'application/json'
            	}
            });
            expect(dispatch).toHaveBeenCalledWith(thruHikerAction(users));
        });
    });
});
