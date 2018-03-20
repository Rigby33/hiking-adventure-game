import matrixReducer from './matrix';
import hikerReducer from './hiker';
import { combineReducers } from 'redux';
export default combineReducers({
	matrixReducer,
	hikerReducer
});