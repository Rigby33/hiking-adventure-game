import React from 'react';
import './hiker.css';
import {connect} from 'react-redux';
import {hike} from '../actions/hikeractions';

class Hiker extends React.Component {
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
		return (
			<div className="hikerMatrix" tabIndex="0" onKeyDown={this.props.hike}>
			{hikerGrid}
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state.hikerReducer.hikerStart);
	return {
		hikerGrid: state.matrixReducer.matrix,
		hikerStart: state.hikerReducer.hikerStart
	}
}

const mapDispatchToProps = dispatch => {
	return {
		hike: (event) => dispatch(hike(event.keyCode)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Hiker);