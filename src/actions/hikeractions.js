export const HIKE = 'HIKE'

// export const hike = keycode => ({
// 	return {
// 		type: HIKE,
// 		keycode
// 	}
// }

export const hike = (keycode, hikerState) => ({
	type: HIKE,
	keycode,
	hikerState
});