import React from 'react';
import './grid.css';
import {connect} from 'react-redux';

class Grid extends React.Component {
	render() {
		console.log(this.props.matrix);
		return (
			<div id="grid">
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {matrix: state.matrix}
}

export default connect(mapStateToProps)(Grid);