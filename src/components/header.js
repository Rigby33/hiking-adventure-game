import React from 'react';
import './header.css';
import logo from '../images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class Header extends React.Component {
	logOut(event) {
		event.preventDefault();
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
	render() {
		const helloUser = this.props.currentUser !== null ?
			<h2>Welcome {this.props.currentUser.username}!</h2> :
			'';
		const logInOut = this.props.currentUser !== null ?
		<a className="headerlink" href="/" onClick={(event) => this.logOut(event)} style={{color: this.props.login ? 'white' : ''}}>Log out</a> :
		<NavLink to='/login' className="headerlink" style={{color: this.props.login ? 'white' : ''}}>Log in</NavLink>
		return (
			<header>
				<div className="logocontainer">
					<Link to='/'><img src={logo} alt="Hiking Adventure"/></Link>
				</div>
				{helloUser}
				<div className="headerbuttons">
					<NavLink to='/game' className="headerlink" style={{color: this.props.game ? 'white' : ''}}>{this.props.currentUser !== null ? 'Start Hike' : 'Hike as guest'}</NavLink>
					<NavLink to='/signup' className="headerlink" style={{color: this.props.signup ? 'white' : ''}}>Sign up</NavLink>
					{logInOut}
					<NavLink to ='/thruhikers' className="headerlink" style={{color: this.props.thruHikers ? 'white' : ''}}>Thru Hikers</NavLink>
				</div>
			</header>
			)
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.authReducer.currentUser
	}
};

export default connect(mapStateToProps)(Header);
