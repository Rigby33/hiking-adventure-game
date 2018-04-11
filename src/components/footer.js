import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
	// goToSignup(event) {
	// 	event.preventDefault();
	// 	this.props.history.push('/signup')
	// }
	// goToLogin(event) {
	// 	event.preventDefault();
	// 	this.props.history.push('/login')
	// }
	render() {
		return (
			<footer>
				<div className="buttons">
					<Link to='/signup'><button>Sign up</button></Link>
					<Link to='/login'><button>Sign up</button></Link>
				</div>
			</footer>
			)
	}
}