export const HIKE = 'HIKE';
export const hike = (keycode) => {
	return ({
	type: HIKE,
	keycode
})};

export const HIKER_FOCUS = 'HIKER_FOCUS';
export const focusHiker = focus => ({
	type: HIKER_FOCUS,
	focus
})