import reducer	 from './index';

describe('reducer', () => {
	it('Should set the initial state when nothing is passed in', () => {
		const state = reducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual(state);
	})
})