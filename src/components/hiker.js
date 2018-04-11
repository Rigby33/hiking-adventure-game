import React from 'react';
import './hiker.css';
import {connect} from 'react-redux';
import {hike} from '../actions/hikeractions';
import { focusHiker } from '../actions/hikeractions';

class Hiker extends React.Component {
	// changefocus(event) {
	// 	event.preventDefault();
	// 	const setTrue = 'true'
	// 	this.props.dispatch(hikerFocus(setTrue));
	// }
	render() {
		const hikerGrid = this.props.hikerGrid.map((row) =>
			row.map((row, index) => {
				let positions = [];
				for(let i = 0; i < this.props.hikerGrid[10].length; i++) {
					if(this.props.hikerGrid[10][i].node) {
						positions.push(this.props.hikerGrid[10][i]);
				}
			}
				return (row === this.props.hikerStart ?
					<div className="hiker hikerGrid" key={index}></div> :
					<div className="hikerGrid" key={index}></div>)
			})
		);

		const checkFocus = this.props.hikerFocus === true ?
		<div className="focused"></div> :
		<div className="notfocused">Click to start hiking</div>;

		return (
			<div className="hikerMatrix" tabIndex="0" onClick={this.props.focusHiker} onKeyDown={this.props.hike}>
				{checkFocus}
				{hikerGrid}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		hikerGrid: state.matrixReducer.matrix,
		hikerStart: state.hikerReducer.hikerStart,
		hikerFocus: state.hikerReducer.hikerFocus
	}
}

const mapDispatchToProps = dispatch => {
	return {
		hike: (event) => dispatch(hike(event.keyCode)),
		focusHiker: () => dispatch(focusHiker()) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Hiker);