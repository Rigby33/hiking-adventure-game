import React from 'react';
import { connect } from 'react-redux';

class CurrentScore extends React.Component {
	render() {
		const hikerScore = <p>Points: <span>{this.props.hikerPoints}</span></p>
		return (
			<div className="currentscore">
				{hikerScore}
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		hikerStart: state.hikerReducer.hikerStart,
		hikerPoints: state.hikerReducer.hikerPoints
	}
};

export default connect(mapStateToProps)(CurrentScore);