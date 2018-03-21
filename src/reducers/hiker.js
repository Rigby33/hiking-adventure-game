import matrixReducer from './matrix';

const hikerMatrix = matrixReducer();


function hikerStarter(matrix) {
	let startingPoint = hikerMatrix.path[0];
	return startingPoint
}

// function hikerPosition(matrix) {
// 	console.log(matrix)
// }

// hikerPosition(hikerMatrix);


const hikerStart = hikerStarter(hikerMatrix);

const initialState = {hikerMatrix, hikerStart};

export default (state=initialState, action) => {
	return state;
}