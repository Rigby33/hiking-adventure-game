import {SAVE_SCORE, saveScore, updateHighScore, GO_TO_THRUHIKERS, gotToThruHikers} from './savescore';

describe('saveScore', () => {
	it('Should return action', () => {
		const action = saveScore();
		expect(action.type).toEqual(SAVE_SCORE);
	})
})