import {SAVE_SCORE, saveScore} from './savescore';

describe('saveScore', () => {
	it('Should return action', () => {
		const score = 100;
		const action = saveScore(score);
		expect(action.type).toEqual(SAVE_SCORE);
		expect(action.score).toEqual(score);
	})
})