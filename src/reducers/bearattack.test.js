import bearReducer, {questionStore, randomNumber} from './bearattack';

describe('bearReducer', () => {
	it('Should set initial state when nothing is passed in', () => {
		const state = bearReducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual({
			questionStore,
			activeQuestion: questionStore[randomNumber],
			show: false
		})
	})
})