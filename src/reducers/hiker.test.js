import hikerReducer, {hikerMatrix, hikerStart} from './hiker';
import {hiker} from '../actions/hikeractions';

describe('hikerReducer', () => {
	it('Should set the inital state when nothing is passed in', () => {
		const state = hikerReducer(undefined, {type: '_UNKNOWN'});
		expect(state).toEqual({
			hikerMatrix,
			hikerStart,
			hikerPoints: 0,
			highscore: 0,
			hikerFocus: true
		})
	})
})