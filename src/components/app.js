import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Game from './game';
import Home from './home';
import SignUp from './signup';
import LogIn from './login';
import ThruHikers from './thruhikers';
import './app.css';

export default function App(props) {
	return (
		<Router>
			<div className="app">
				<main>
					<Route exact path="/" component={Home}/>
					<Route exact path="/game" component={Game}/>
					<Route exact path="/signup" component={SignUp}/>
					<Route exact path="/login" component={LogIn}/>
					<Route exact path="/thruhikers" component={ThruHikers}/>
				</main>
			</div>
		</Router>
		)
}