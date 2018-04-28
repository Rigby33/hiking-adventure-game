import authReducer from './auth';

describe('authReducer', () => {
	it('should set initial state without anything passed in', () => {
		const state = authReducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual({
			authToken: null,
			currentUser: null,
			loading: false,
			error: null
		})
	})
})