import matrixReducer from './matrix';

const hikerPosition = matrixReducer().matrix;

// function position() {
// 	let startingPosition = [];
// 	for(let i = 0; i < matrix[10].length; i++) {
// 		if(matrix[10][i].node) {
// 			startingPosition.push({x: matrix[10][i].x, y: matrix[10][i].x, node: matrix[10][i].node});
// 			break;
// 		}
// 	}
// 	return startingPosition
// }

// const hikerPosition = position();
const initialState = {hikerPosition};

export default (state=initialState, action) => {
	console.log(state);
	return state;
}