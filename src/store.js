import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';


// export default createStore(reducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ &&
// 	window.__REDUX_DEVTOOLS_EXTENSION__()
// 	);
const middleware = [thunk, routerMiddleware(history)]
export const history = createHistory(); 


const store = createStore(
	reducer, {}, composeWithDevTools(applyMiddleware(thunk))
);

// const store = createStore(reducer, applyMiddleware(thunk), 
// 	window.__REDUX_DEVTOOLS_EXTENSION__ &&
// 	window.__REDUX_DEVTOOLS_EXTENSION__()
// 	);

const authToken = loadAuthToken();
console.log(authToken);
if(authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;