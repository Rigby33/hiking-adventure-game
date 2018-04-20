import matrixReducer from './matrix';

const hikerMatrix = matrixReducer();
let startingPoint

function hikerStarter(matrix) {
	startingPoint = hikerMatrix.path[0];
	return startingPoint
}


const hikerStart = hikerStarter(hikerMatrix);

const initialState = {hikerMatrix, hikerStart, hikerPoints: 0, highscore: 0, hikerFocus: true};

export default (state=initialState, action) => {
	return state;
}
