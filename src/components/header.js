import React from 'react';
import './header.css';
import logo from '../images/logo.png';
import { NavLink, Link } from 'react-router-dom';

export default class Header extends React.Component {
	// goToGame() {
	// 	return this.props.dispatch(game());
	// }
	// goToSignup() {
	// 	return this.props.dispatch(signup());
	// }
	// goToLogin() {
	// 	return this.props.dispatch(login());
	// }
	render() {
		return (
			<header>
				<div className="logocontainer">
					<Link to='/'><img src={logo} alt="Hiking Adventure"/></Link>
				</div>
				<div className="headerbuttons">
					<NavLink to='/game' className="headerlink" style={{color: this.props.game ? 'white' : ''}}>Hike as guest</NavLink>
					<NavLink to='/signup' className="headerlink" style={{color: this.props.signup ? 'white' : ''}}>Sign up</NavLink>
					<NavLink to='/login' className="headerlink" style={{color: this.props.login ? 'white' : ''}}>Log in</NavLink>
					<NavLink to ='/thruhikers' className="headerlink" style={{color: this.props.thruHikers ? 'white' : ''}}>Thru Hikers</NavLink>
				</div>
			</header>
			)
	}
}
