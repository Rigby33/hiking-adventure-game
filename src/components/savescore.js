import React from 'react';
import {connect} from 'react-redux';
import {updateHighScore} from '../actions/savescore';
import './savescore.css';
// import { Link } from 'react-router-dom';
// import { push } from 'react-router-redux';

class SaveScore extends React.Component {
	onSave() {
		const userId = this.props.currentUser._id;
		const highscore = this.props.highscore;
		return this.props.dispatch(updateHighScore(userId, highscore));
	}
	render() {
		const button = this.props.currentUser !== null ?
		<button onClick={() => this.onSave()}>Save score</button> :
		<div></div>;
		return (
			<div className="savescore">
				{button}
			</div>
		);
	}
}


const mapStateToProps = state => {
	return {
		highscore: state.hikerReducer.highscore,
		currentUser: state.authReducer.currentUser
	}
};

export default connect(mapStateToProps)(SaveScore);