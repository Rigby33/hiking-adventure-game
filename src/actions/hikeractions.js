export const HIKE = 'HIKE';
export const hike = (keycode, hikerState) => ({
	type: HIKE,
	keycode,
	hikerState
});

export const HIKER_FOCUS = 'HIKER_FOCUS';
export const focusHiker = focus => ({
	type: HIKER_FOCUS,
	focus
})