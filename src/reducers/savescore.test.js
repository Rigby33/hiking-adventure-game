import saveScoreReducer from './savescore';

describe('saveScoreReducer', () => {
	it('should set initial state without anything passed in', () => {
		const state = saveScoreReducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual({
			saveScore: false
		})
	})
})