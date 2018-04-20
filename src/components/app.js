import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Game from './game';
import Home from './home';
import SignUp from './signup';
import LogIn from './login';
import ThruHikers from './thruhikers';
import './app.css';
import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
	componentDidUpdate(prevProps) {
		if(!prevProps.loggedIn && this.props.loggedIn) {
			this.startPeriodicRefresh();
		} else if(prevProps.loggedIn && !this.props.loggedIn) {
			this.stopPeriodicRefresh();
		}
	}

	componentWillUnmount() {
		this.stopPeriodicRefresh();
	}

	startPeriodicRefresh() {
		this.refreshInterval = setInterval(
			() => this.props.dispatch(refreshAuthToken()),
			60 * 60 * 100
		);
	}

	stopPeriodicRefresh() {
		if(!this.refreshInterval) {
			return;
		}
	}
	render() {
		return (
				<div className="app">
					<main>
						<Route exact path="/" component={Home}/>
						<Route exact path="/game" component={Game}/>
						<Route exact path="/signup" component={SignUp}/>
						<Route exact path="/login" component={LogIn}/>
						<Route exact path="/thruhikers" component={ThruHikers}/>
					</main>
				</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		hasAuthToken: state.authReducer.authToken !== null,
		loggedIn: state.authReducer.currentUser !== null,
	}
}

export default withRouter(connect(mapStateToProps)(App));
// export default function App(props) {
// 	return (
// 		<Router>
// 			<div className="app">
// 				<main>
// 					<Route exact path="/" component={Home}/>
// 					<Route exact path="/game" component={Game}/>
// 					<Route exact path="/signup" component={SignUp}/>
// 					<Route exact path="/login" component={LogIn}/>
// 					<Route exact path="/thruhikers" component={ThruHikers}/>
// 				</main>
// 			</div>
// 		</Router>
// 		)
// }