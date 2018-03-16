import {createStore} from 'redux';
import {matrixReducer} from './reducers';

console.log(matrixReducer);

export default createStore(matrixReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__()
	);