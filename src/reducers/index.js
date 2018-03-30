import matrixReducer from './matrix';
import hikerReducer from './hiker';
import { combineReducers } from 'redux';
import { HIKE } from '../actions/hikeractions';
import { reset } from './matrix';

const reducer = combineReducers({
	matrixReducer,
	hikerReducer
});

export default function (state, action) {
	if(action.type === HIKE) {
		const hikerPosition = state.hikerReducer.hikerStart;
		const lastPath = state.matrixReducer.path[state.matrixReducer.path.length-1];
		if(action.keycode === 38 && hikerPosition.x === lastPath.x && hikerPosition.y === lastPath.y) {
			const newMatrix = reset();
			const newHikerStart = newMatrix.path[0];
			return {
				matrixReducer: newMatrix,
				hikerReducer: Object.assign({}, state.hikerReducer, {
					hikerStart: newHikerStart,
				})
			};
		}
	}
		if(action.type === HIKE) {
		let nextCell;
		if(action.keycode === 37) {
			if(state.matrixReducer.matrix[state.hikerReducer.hikerStart.x][state.hikerReducer.hikerStart.y].y > 0) {
				nextCell = state.matrixReducer.matrix[state.hikerReducer.hikerStart.x][state.hikerReducer.hikerStart.y-1];
				if(nextCell.node) {
					let score = state.hikerReducer.hikerPoints;
					score++;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score
						}
					})
				} else {
					let score = state.hikerReducer.hikerPoints;
					score--;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score
						}
					})
				}
				return Object.assign({}, state, {
					hikerReducer: {hikerStart: nextCell}
				});
			} else {
				return state;
			}
		} else if(action.keycode === 39) {
			if(state.matrixReducer.matrix[state.hikerReducer.hikerStart.x][state.hikerReducer.hikerStart.y].y < 25)  {
				nextCell = state.matrixReducer.matrix[state.hikerReducer.hikerStart.x][state.hikerReducer.hikerStart.y+1];
				if(nextCell.node) {
					let score = state.hikerReducer.hikerPoints;
					score++;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score
						}
					})
				} else {
					let score = state.hikerReducer.hikerPoints;
					score--;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score
						}
					})
				}
				return Object.assign({}, state, {
					hikerReducer: {hikerStart: nextCell}
				});
			} else {
				return state;
			}
		} else if(action.keycode === 38) {
			if(state.matrixReducer.matrix[state.hikerReducer.hikerStart.x][state.hikerReducer.hikerStart.y].x > 0)  {
				nextCell = state.matrixReducer.matrix[state.hikerReducer.hikerStart.x-1][state.hikerReducer.hikerStart.y];
				if(nextCell.bear && !nextCell.award) {
					console.log('Ah a bear')
				}
				if(nextCell.node) {
					let score = state.hikerReducer.hikerPoints;
					score++;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score
						}
					})
				} else {
					let score = state.hikerReducer.hikerPoints;
					score--;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score
						}
					})
				}
				return Object.assign({}, state, {
					hikerReducer: {hikerStart: nextCell}
				});
			} else {
				return state;
			}
		} else if(action.keycode === 40) {
			if(state.matrixReducer.matrix[state.hikerReducer.hikerStart.x][state.hikerReducer.hikerStart.y].x < 10)  {
				nextCell = state.matrixReducer.matrix[state.hikerReducer.hikerStart.x+1][state.hikerReducer.hikerStart.y];
				if(nextCell.node) {
					let score = state.hikerReducer.hikerPoints;
					score++;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score
						}
					})
				} else {
					let score = state.hikerReducer.hikerPoints;
					score--;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score
						}
					})
				}
				return Object.assign({}, state, {
					hikerReducer: {hikerStart: nextCell}
				});
			} else {
				return state;
			}
		} else if(action.keycode !== 40 || action.keycode !== 39 || action.keycode !== 38 || action.keycode !== 37) {
			return state;
		}
	}
	if(action.type === '@@INIT') {
		const newMatrix = reset();
		const newHikerStart = newMatrix.path[0];
		return {
			matrixReducer: newMatrix,
			hikerReducer: {
				hikerStart: newHikerStart,
				hikerPoints: 0
			}
		};
	}
	return reducer(state, action);
}