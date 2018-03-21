import React from 'react';
import './hiker.css';
import {connect} from 'react-redux';

class Hiker extends React.Component {
		testingArrows(event) {
			if(event.keyCode === 38) {
				console.log('up')
			} else if(event.keyCode === 40) {
				console.log('down')
			} else if(event.keyCode === 37) {
				console.log('left');
			} else if(event.keyCode === 39) {
				console.log('right')
			}
		}
	render() {
		const hikerGrid = this.props.hikerGrid.map((row) =>
			row.map((row, index) => {
				let positions = [];
				for(let i = 0; i < this.props.hikerGrid[10].length; i++) {
					if(this.props.hikerGrid[10][i].node) {
						positions.push(this.props.hikerGrid[10][i]);
				}
			}
				return (row.x === this.props.hikerStart.x && row.y === this.props.hikerStart.y && row.node ?
					<div className="hiker hikerGrid" key={index} tabIndex={-1} onKeyDown={e => this.testingArrows(e)}></div> :
					<div className="hikerGrid" key={index}></div>)
			})
		);
		return (
			<div className="hikerMatrix">
			{hikerGrid}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		hikerGrid: state.matrixReducer.matrix,
		hikerStart: state.matrixReducer.path[0]
	}
}

export default connect(mapStateToProps)(Hiker);