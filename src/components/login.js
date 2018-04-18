import React from 'react';
import './login.css';
import Header from './header';
import LoginForm from './loginform';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export function LogIn(props) {
	if(props.loggedIn) {
		return <Redirect to="/game"/>
	}
	return (
		<div className="login">
			<Header/>
			<LoginForm/>
		</div>
		);
}

const mapStateToProps = state => {
	return {
		loggedIn: state.authReducer.currentUser !== null
	}
};

export default connect(mapStateToProps)(LogIn);

// export default function LogIn() {
// 	return (
// 		<div className="login">
// 			<Header/>
// 			<form>
// 				<h2>Sign up to save your <span>high score</span> and get added to the <span>thru hiker</span> board</h2>
// 				<input type="text" placeholder="trail name"/>
// 				<input type="password" placeholder="password"/>
// 				<button type="submit">Log In</button>
// 			</form>
// 		</div>
// 		);
// }