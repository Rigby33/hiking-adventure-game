import React from 'react';
import './login.css';
import Header from './header';
// import RegisterForm from './loginform';

export default function LogIn() {
	return (
		<div className="login">
			<Header/>
			<form>
				<h2>Sign up to save your <span>high score</span> and get added to the <span>thru hiker</span> board</h2>
				<input type="text" placeholder="trail name"/>
				<input type="password" placeholder="password"/>
				<button type="submit">Log In</button>
			</form>
		</div>
		);
}