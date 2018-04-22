import React from 'react';
import './home.css';
import logo from '../images/logo.png';
import {connect} from 'react-redux';
import { showInstructions } from '../actions/homeactions';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

class Home extends React.Component {
	goToGame(event) {
		event.preventDefault();
		this.props.history.push('/game');
	}
	goToSignup(event) {
		event.preventDefault();
		this.props.history.push('/signup');
	}
	goToLogin(event) {
		event.preventDefault();
		this.props.history.push('/login')
	}
	show(event) {
		// event.preventDefault;
		return this.props.dispatch(showInstructions());
	}
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
	render () {

		const showDiv = this.props.show === true ?
		{
			visibility: 'visible',
			opacity: '1'
		} :
		{
			visibility: 'hidden',
			position: 'absolute',
			opacity: '0',
		}
		const addActive = this.props.show ? 
		{
			backgroundColor: 'rgba(79, 112, 62)'
		} : {};
		const homelogo = this.props.show ? 'smallerlogo homelogo' :
		'homelogo';

		const signUpLogin = this.props.currentUser !== null ?
			<div className="signedinhomebuttons">
			<button onClick={e => this.goToGame(e)}>return to hike</button>
			<button onClick={() => this.logOut()}>Log out</button>
			</div> :
			<div className="homebuttons">
			<button onClick={e => this.goToGame(e)}>hike as guest</button>
			<button onClick={e => this.goToSignup(e)}>Sign up</button>
			<button onClick={e => this.goToLogin(e)}>Log in</button>
			</div>;
			const helloUser = this.props.currentUser !== null ?
			<h2 style={{color:'white', fontSize: '2em', fontWeight: 'normal'}}>Welcome back {this.props.currentUser.username}!</h2> :
			'';
		return (
			<div className="home">
				<div className="homewrapper">
					<img src={logo} alt="hiking adventure" className={homelogo}/>
					{helloUser}
					 {signUpLogin}
					<button className="showinstructions" style={addActive} onClick={e => this.show(e)}>{this.props.show ? 'hide instructions' : 'show instructions'}</button>
					<div className="instructionsWrapper">
						<div className="instructions" style={showDiv}>
							<p>This desktop game can be easily played with just the arrow keys on your keyboard and some knowledge of backpacking and long backpacking trails.</p>
							<p>The goal of the game is to stay on the trail and collect as many points as possible. The more points you get the higher you will be on the Thru Hiker Board. If you step off of the path 1 point will be deducted from your score.</p>
							<div className="pathmarkers">
								<div className="trailwrapper">
								<div className="trail"></div>
								<p>Part of trail</p>
								</div>
								<div className="nottrailwrapper">
								<div className="nottrail"></div>
								<p>Not part of trail. Minus 1 point</p>
								</div>
							</div>
							<p>One of the most important things to remember while hiking is to "LEAVE NO TRACE" Throughout the game you will have an opportunity to help clean up the trail. You will see pieces of trash along the way and if you pick up the trash 10 points will be added to your score. In addition to picked up trash you will also have the opportunity to answer trail triva questions. If you hike over a spot with a bear a question will pop up. Answering the question correctly will add 100 points to your score while and incorrect quess will deduct 100 points from your score.</p>
							 <div className="pathmarkers">
								<div className="whiteblazewrapper">
									<div className="awardhome">
									</div>
									<p>Trash</p>
								</div>
								<div className="bearwrapper">
									<div className="bearhome">
									</div>
									<p>Bear</p>
								</div>
							 </div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		show: state.homeReducer.showInstructions,
		currentUser: state.authReducer.currentUser
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		showInstructions: () => dispatch(showInstructions())
// 	}
// }

export default connect(mapStateToProps)(Home);