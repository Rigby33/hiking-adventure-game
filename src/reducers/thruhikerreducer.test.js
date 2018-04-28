import thruHikerReducer from './thruhikerreducer';

describe('thruHikerReducer', () => {
	it('should set initial state without anything passed in', () => {
		const state = thruHikerReducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual({
			users: []
		})
	})
})