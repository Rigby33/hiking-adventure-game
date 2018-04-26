import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {goToThruhikers} from '../actions/savescore';
import './gotothruhikers.css'

export class GoToThruHikers extends React.Component {
	backToGame(event) {
		event.preventDefault();
		return this.props.dispatch(goToThruhikers())
	} 
	render() {
		const thruHikerPopup = this.props.saveScore === true ?
			(<div className="gotothruhikers">
			<div>
			<h2>Would you like to view the Thru Hiker leader board?</h2>
			<div className="linkoptions">
			<Link to="/thruhikers">Go To Thru Hiker Board</Link>
			<a href="/game" onClick={(event) => this.backToGame(event)}>Return to game</a>
			</div>
			</div>
			</div>) :
			<div></div>;
		return (
			<div>
			{thruHikerPopup}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		saveScore: state.saveScoreReducer.saveScore
	}
}

export default connect(mapStateToProps)(GoToThruHikers);