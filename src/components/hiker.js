import React from 'react';
import './hiker.css';
import {connect} from 'react-redux';

class Hiker extends React.Component {
	render() {
		const hikerGrid = this.props.hikerPosition.map((row) =>
			row.map((cell, index) => {
				let xId = cell.x.toString();
				let yId = cell.y.toString();
				return (cell.node ?
					<div className="newDiv partOfPath" id={xId + yId} key={index}></div>
					: <div className="newDiv" id={xId + yId} key={index}></div>);
			})
		);
		return (
			<div className="hiker">
			{hikerGrid}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {hikerPosition: state.hikerReducer.hikerPosition,
	}
}

// console.log(mapStateToProps());

export default connect(mapStateToProps)(Hiker);