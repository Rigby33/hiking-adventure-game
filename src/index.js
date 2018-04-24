import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import store, {history} from './store';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'));
