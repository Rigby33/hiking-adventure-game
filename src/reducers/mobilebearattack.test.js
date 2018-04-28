import mobileBearReducer, {questionStore, randomQuestion} from './mobilebearattack';

describe('mobileBearReducer', () => {
	it('should set initial state without anything passed in', () => {
		const state = mobileBearReducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual({
			questionStore,
			activeQuestion: questionStore[randomQuestion],
		})
	})
})