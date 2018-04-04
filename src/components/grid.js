import React from 'react';
import './grid.css';
import Hiker from './hiker';
import {connect} from 'react-redux';

class Grid extends React.Component {
	render() {
		const grid = this.props.matrix.map((row) => 
			row.map((cell, index) => {
				let xId = cell.x.toString();
				let yId = cell.y.toString();
				if (cell.award) {
					return (<div className="newDiv partOfPath award" id={xId + yId} key={index}></div>);
				} else if (cell.bear) {
					return (<div className="newDiv partOfPath bear" id={xId + yId} key={index}></div>);
				} else if (cell.node) {
					return (<div className="newDiv partOfPath" id={xId + yId} key={index}></div>);
				} else {
					return (<div className="newDiv" id={xId + yId} key={index}></div>);
				}
			})
		);
		return (
			<div className="gridwrapper">
				<div id="grid">
					{grid}
					<Hiker/>
				</div>
			</div>
			);
	}
}


const mapStateToProps = state => {
	return {matrix: state.matrixReducer.matrix}
}

export default connect(mapStateToProps)(Grid);