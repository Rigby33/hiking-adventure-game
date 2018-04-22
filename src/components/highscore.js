import React from 'react';
import {connect} from 'react-redux';

class HighScore extends React.Component {
	render() {
		let highScore;
		if(this.props.currentUser !== null) {
			if(this.props.currentUser.highscore > this.props.highscore) {
				highScore = <p>High Score: <span>{this.props.currentUser.highscore}</span></p>
			} else {
				highScore = <p>High Score: <span>{this.props.highscore}</span></p>
			}
		} else {
			highScore = <p>High Score: <span>{this.props.highscore}</span></p>
		}
		return (
			<div className="highscore">
				{highScore}
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

export default connect(mapStateToProps)(HighScore);