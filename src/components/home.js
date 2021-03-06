import React from 'react';
import './home.css';
import logo from '../images/logo.png';
import myLogo from '../images/logo.svg';
import arrows from '../images/arrows.gif';
import {connect} from 'react-redux';
import { showInstructions } from '../actions/homeactions';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import MediaQuery from 'react-responsive';


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
							<MediaQuery query="(min-device-width: 1367px)">
							<p>
							<b>Test Trail Name:</b> Awkward Magic<br/>
							<b>Test Password:</b> letmeinnow</p>
							<p>This desktop game can be easily played with just the arrow keys on your keyboard and some knowledge of backpacking and long backpacking trails.</p>
							<img src={arrows} alt="arrows" className="arrows"/>
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
							 </MediaQuery>
							 <MediaQuery query="(max-device-width: 1366px)">
								<p>
								<b>Test Trail Name:</b> Awkward Magic<br/>
								<b>Test Password:</b> letmeinnow</p>
								<p>You are currently playing the table and mobile version of Hiking an Adventure. This web app was built to be played on lager device sizes with a width of at least 1367px and with a keyboard. But you can still either click hike as a guest or sign up or log in and answer hiking trivia questions. If you answer a question correctly 100 points will be added to your score. Answering a question incorrectly will deduct 100 points. If you are logged in you can save your score and be added to the Thru Hikers leader board!</p>
							 </MediaQuery>
						</div>
					</div>
				</div>
				<div className="githublink">created by <a href="https://github.com/Rigby33/hiking-adventure-game" target="_blank" rel="noopener noreferrer"><img src={myLogo} alt="Catherine Lynn"/></a>
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