import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './components/grid';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<Grid />
	</Provider>,
	document.getElementById('root'));
