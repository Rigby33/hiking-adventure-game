import {HIKE, hike, HIKER_FOCUS, focusHiker} from './hikeractions';

describe('hike', () => {
	it('Should return the actions', () => {
		const keycode = 38;
		const action = hike(keycode);
		expect(action.type).toEqual(HIKE);
		expect(action.keycode).toEqual(keycode);
	})
})

describe('focusHiker', () => {
    it('Should return the action', () => {
        const focus = true;
        const action = focusHiker(focus);
        expect(action.type).toEqual(HIKER_FOCUS);
        expect(action.focus).toEqual(true);
    });
});