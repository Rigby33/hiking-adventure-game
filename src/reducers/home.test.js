import homeReducer from './home';

describe('homeReducer', () => {
	it('should set initial state with nothing passed in', () => {
		const state = homeReducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual({
			showInstructions: false
		})
	})
})