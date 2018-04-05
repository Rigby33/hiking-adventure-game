import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Game from './game';
import Home from './home';
import './app.css';

export default function App(props) {
	return (
		<Router>
			<div className="app">
				<main>
					<Route exact path="/" component={Home}/>
					<Route exact path="/game" component={Game}/>
				</main>
			</div>
		</Router>
		)
}