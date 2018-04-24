import {SHOW_INSTRUCTIONS, showInstructions} from './homeactions';

describe('showInstructions', () => {
	it('Should return the actions', () => {
		const showInstruction = true;
		const action = showInstructions(showInstruction);
		expect(action.type).toEqual(SHOW_INSTRUCTIONS);
		expect(action.showInstructions).toEqual(true);
	})
});