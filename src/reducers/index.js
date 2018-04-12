import matrixReducer from './matrix';
import hikerReducer from './hiker';
import bearReducer from './bearattack';
import { combineReducers } from 'redux';
import { HIKE, HIKER_FOCUS } from '../actions/hikeractions';
import { ANSWER_BEAR_QUESTION } from '../actions/bearattack';
import { reset } from './matrix';
import homeReducer from './home';
import { SHOW_INSTRUCTIONS } from '../actions/homeactions';

const reducer = combineReducers({
	bearReducer,
	matrixReducer,
	hikerReducer,
	homeReducer
});


export default function (state, action) {
	if(action.type === SHOW_INSTRUCTIONS) {
		return Object.assign({}, state, {
			homeReducer: Object.assign({}, state.homeReducer, {
				showInstructions: !state.homeReducer.showInstructions
			})
		});
	}
	if(action.type === HIKE) {
		const hikerPosition = state.hikerReducer.hikerStart;
		const lastPath = state.matrixReducer.path[state.matrixReducer.path.length-1];
		if(action.keycode === 38 && hikerPosition.x === lastPath.x && hikerPosition.y === lastPath.y) {
			const newMatrix = reset();
			const questionStore = bearReducer().questionStore;
			let randomQuestion = Math.floor(Math.random()*(questionStore.length-1));
			const activeQuestion = questionStore[randomQuestion];
			const show = bearReducer().show;
			const newHikerStart = newMatrix.path[0];
			return Object.assign({}, state, {
				bearReducer: Object.assign({}, state.bearReducer, {
					activeQuestion,
					show
				}),
				matrixReducer: newMatrix,
				hikerReducer: Object.assign({}, state.hikerReducer, {
					hikerStart: newHikerStart,
					hikerFocus: true
				})
			});
		}
	}
		if(action.type === HIKE && !state.bearReducer.show) {
			let nextCell;
			const matrix = state.matrixReducer.matrix;
			const hikerStartX = state.hikerReducer.hikerStart.x;
			const hikerStartY = state.hikerReducer.hikerStart.y;
		if(action.keycode === 37) {
			if(matrix[hikerStartX][hikerStartY].y > 0) {
				nextCell = matrix[hikerStartX][hikerStartY-1];
				if(nextCell.node && !nextCell.award && !nextCell.bear) {
					let score = state.hikerReducer.hikerPoints;
					// score++;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				} else if(nextCell.bear) {
					let score = state.hikerReducer.hikerPoints
					return Object.assign({}, state, {
						bearReducer: Object.assign({}, state.bearReducer, {
							show: true
						}),
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: false
						}
					})
				} else if(nextCell.award) {
					let score = state.hikerReducer.hikerPoints;
					score+=10;
					delete nextCell.award;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				} else if(!nextCell.node) {
					let score = state.hikerReducer.hikerPoints;
					score--;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				}
			} else {
				return state;
			}
		} else if(action.keycode === 39) {
			if(matrix[hikerStartX][hikerStartY].y < 19)  {
				nextCell = matrix[hikerStartX][hikerStartY+1];
				if(nextCell.node && !nextCell.award && !nextCell.bear) {
					let score = state.hikerReducer.hikerPoints;
					// score++;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				} else if(nextCell.bear) {
					let score = state.hikerReducer.hikerPoints
					return Object.assign({}, state, {
						bearReducer: Object.assign({}, state.bearReducer, {
							show: true
						}),
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: false
						}
					})
				} else if(nextCell.award) {
					let score = state.hikerReducer.hikerPoints;
					score+=10;
					delete nextCell.award;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				} else if(!nextCell.node) {
					let score = state.hikerReducer.hikerPoints;
					score--;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				} else {
					return state;
				}
			} else {
				return state;
			}
		} else if(action.keycode === 38) {
			if(matrix[hikerStartX][hikerStartY].x > 0)  {
				nextCell = matrix[hikerStartX-1][hikerStartY];
				if(nextCell.node && !nextCell.award && !nextCell.bear) {
					let score = state.hikerReducer.hikerPoints;
					// score++;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				} else if(nextCell.bear) {
					let score = state.hikerReducer.hikerPoints
					return Object.assign({}, state, {
						bearReducer: Object.assign({}, state.bearReducer, {
							show: true
						}),
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: false
						}
					})
				} else if(nextCell.award) {
					let score = state.hikerReducer.hikerPoints;
					score+=10;
					delete nextCell.award;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				} else if(!nextCell.node) {
					let score = state.hikerReducer.hikerPoints;
					score--;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				}
			} else {
				return state;
			}
		} else if(action.keycode === 40) {
			if(matrix[hikerStartX][hikerStartY].x < 10)  {
				nextCell = matrix[hikerStartX+1][hikerStartY];
				if(nextCell.node && !nextCell.award && !nextCell.bear) {
					let score = state.hikerReducer.hikerPoints;
					// score++;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				} else if(nextCell.bear) {
					let score = state.hikerReducer.hikerPoints
					return Object.assign({}, state, {
						bearReducer: Object.assign({}, state.bearReducer, {
							show: true
						}),
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: false
						}
					})
				} else if(nextCell.award) {
					let score = state.hikerReducer.hikerPoints;
					score+=10;
					delete nextCell.award;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				} else if(!nextCell.node) {
					let score = state.hikerReducer.hikerPoints;
					score--;
					return Object.assign({}, state, {
						hikerReducer: {
							hikerStart: nextCell,
							hikerPoints: score,
							hikerFocus: true
						}
					})
				}
			} else {
				return state;
			}
		} else if(action.keycode !== 40 || action.keycode !== 39 || action.keycode !== 38 || action.keycode !== 37) {
			return state;
		}
	}
	if(action.keycode === 38 || action.keycode === 39 || action.keycode === 37 || action.keycode === 40) {
		return state;
	}
	if(action.type === ANSWER_BEAR_QUESTION) {
		let answer = action.answer;
		if(answer === state.bearReducer.activeQuestion.correctAnswer) {
			delete state.hikerReducer.hikerStart.bear;
			let score = state.hikerReducer.hikerPoints;
			const questionStore = bearReducer().questionStore;
			let randomQuestion = Math.floor(Math.random()*(questionStore.length-1));
			const activeQuestion = questionStore[randomQuestion];
			score+=100;
			return Object.assign({}, state, {
				bearReducer: Object.assign({}, state.bearReducer, {
					activeQuestion,
					show: false
				}),
				hikerReducer: {
					hikerStart: state.hikerReducer.hikerStart,
					hikerPoints: score,
					hikerFocus: false
				}
			});
		} else {
			delete state.hikerReducer.hikerStart.bear;
			let score = state.hikerReducer.hikerPoints;
			const questionStore = bearReducer().questionStore;
			let randomQuestion = Math.floor(Math.random()*(questionStore.length-1));
			const activeQuestion = questionStore[randomQuestion];
			score-=100;
			return Object.assign({}, state, {
				bearReducer: Object.assign({}, state.bearReducer, {
					activeQuestion,
					show: false
				}),
				hikerReducer: {
					hikerStart: state.hikerReducer.hikerStart,
					hikerPoints: score,
					hikerFocus: false
				}
			});
		}
	}
	if(action.type === HIKER_FOCUS) {
			let score = state.hikerReducer.hikerPoints;
			return Object.assign({}, state, {
				hikerReducer: {
					hikerStart: state.hikerReducer.hikerStart,
					hikerPoints: score,
					hikerFocus: true
				}
			})
	}
	if(action.type === '@@INIT') {
		const questionStore = bearReducer().questionStore;
		let randomQuestion = Math.floor(Math.random()*(questionStore.length-1));
		const activeQuestion = questionStore[randomQuestion];
		const show = bearReducer().show;
		const showInstructions = homeReducer().showInstructions;
		const newMatrix = reset();
		const newHikerStart = newMatrix.path[0];
		return {
			homeReducer: {
				showInstructions
			},
			bearReducer: {
				activeQuestion,
				show
			},
			matrixReducer: newMatrix,
			hikerReducer: {
				hikerStart: newHikerStart,
				hikerPoints: 0,
				hikerFocus: false
			}
		};
	}
	return reducer(state, action);
}