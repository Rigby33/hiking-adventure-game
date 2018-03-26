import matrixReducer from './matrix';
import {HIKE} from '../actions/hikeractions';

const hikerMatrix = matrixReducer();
let startingPoint

function hikerStarter(matrix) {
	startingPoint = hikerMatrix.path[0];
	return startingPoint
}

const hikerStart = hikerStarter(hikerMatrix);

const initialState = {hikerMatrix, hikerStart};

export default (state=initialState, action) => {
	if(action.type === HIKE) {
		let nextCell;
		if(action.keycode === 37) {
			if(state.hikerMatrix.matrix[state.hikerStart.x][state.hikerStart.y].y > 0) {
				nextCell = state.hikerMatrix.matrix[state.hikerStart.x][state.hikerStart.y-1];
				return Object.assign({}, state, {
					hikerStart: nextCell
				});
			} else {
				return state;
			}
		} else if(action.keycode === 39) {
			if(state.hikerMatrix.matrix[state.hikerStart.x][state.hikerStart.y].y < 25)  {
				nextCell = state.hikerMatrix.matrix[state.hikerStart.x][state.hikerStart.y+1];
				return Object.assign({}, state, {
					hikerStart: nextCell
				});
			} else {
				return state;
			}
		} else if(action.keycode === 38) {
			if(state.hikerMatrix.matrix[state.hikerStart.x][state.hikerStart.y].x > 0)  {
				nextCell = state.hikerMatrix.matrix[state.hikerStart.x-1][state.hikerStart.y];
				return Object.assign({}, state, {
					hikerStart: nextCell
				});
			} else {
				return state;
			}
		} else if(action.keycode === 40) {
			if(state.hikerMatrix.matrix[state.hikerStart.x][state.hikerStart.y].x < 10)  {
				nextCell = state.hikerMatrix.matrix[state.hikerStart.x+1][state.hikerStart.y];
				return Object.assign({}, state, {
					hikerStart: nextCell
				});
			} else {
				return state;
			}
		} else if(action.keycode !== 40 || action.keycode !== 39 || action.keycode !== 38 || action.keycode !== 37) {
			return state;
		}
	} else {
		return state;
	}
}
