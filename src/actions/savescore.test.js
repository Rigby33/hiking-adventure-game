import {SAVE_SCORE, saveScore} from './savescore';

describe('saveScore', () => {
	it('Should return action', () => {
		const action = saveScore();
		expect(action.type).toEqual(SAVE_SCORE);
	})
})