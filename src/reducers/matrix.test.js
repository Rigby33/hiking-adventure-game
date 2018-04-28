import matrixReducer, {matrix, path} from './matrix';

describe('matrixReducer', () => {
	it('Should set initial state without passing anything in', () => {
		const state = matrixReducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual({
			matrix,
			path
		})
	})
})