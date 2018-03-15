import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './components/grid';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Grid />, document.getElementById('root'));
registerServiceWorker();
