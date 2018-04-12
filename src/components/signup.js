import React from 'react';
import './signup.css';
import Header from './header';
// import RegisterForm from './signupform';

export default function SignUp() {
	return (
		<div className="signup">
			<Header/>
			<form>
				<h2>Sign up to save your <span>high score</span> and get added to the <span>thru hiker</span> board</h2>
				<input type="text" placeholder="trail name"/>
				<input type="password" placeholder="password"/>
				<input type="password" placeholder="confirm password"/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
		);
}