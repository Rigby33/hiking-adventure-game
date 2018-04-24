import {
	SET_AUTH_TOKEN,
	setAuthToken,
	USER_VERIFIED,
	userVerified,
	CLEAR_AUTH,
	clearAuth,
	AUTH_REQUEST,
	authRequest,
	AUTH_SUCCESS,
	authSuccess,
	AUTH_ERROR,
	authError,
	storeAuthInfo,
	loginNewUser,
	login,
	refreshAuthToken
} from './auth';

// describe('setAuthToken', () => {
// 	it('Should return action', () => {

// 	})
// });

describe('userVerified', () => {
	it('Should return the action', () => {
		const verified = true;
		const action = userVerified(verified);
		expect(action.type).toEqual(USER_VERIFIED);
		expect(action.verified).toEqual(true);
	})
});

describe('clearAuth', () => {
	it('Should return the action', () => {
		const action = clearAuth();
		expect(action.type).toEqual(CLEAR_AUTH);
	})
});

describe('authRequest', () => {
	it('Should return the action', () => {
		const action = authRequest();
		expect(action.type).toEqual(AUTH_REQUEST);
	})
});

describe('authSuccess', () => {
	it('Should return the action', () => {
		const currentUser = 'exampleuser';
		const action = authSuccess(currentUser);
		expect(action.type).toEqual(AUTH_SUCCESS);
		expect(action.currentUser).toEqual(currentUser);
	})
});

describe('authError', () => {
	it('Should return the action', () => {
		const error = 'ValidationError';
		const action = authError(error);
		expect(action.type).toEqual(AUTH_ERROR);
		expect(action.error).toEqual(error);
	})
});

// describe('loginNewUser', () => {
// 	it('Should dispatch storeAuthInfo')
// 	const username = 'newuser';
// 	const password = 'examplepassword';
// 	const highscore = 100;
// 	global.fetch = jest.fn().mockImplementation(() => {
// 		Promise.resolve({
// 			ok: true,
// 			json() {
// 				return {username, password, highscore}
// 			}
// 		})
// 	})
// })