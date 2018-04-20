import React from 'react';
import {connect} from 'react-redux';

class HighScore extends React.Component {
	render() {
		const highscore = <p>High Score: <span>{this.props.highscore}</span></p>
		return (
			<div className="highscore">
				{highscore}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		highscore: state.hikerReducer.highscore
	}
};

export default connect(mapStateToProps)(HighScore);