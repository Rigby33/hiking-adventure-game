import React from 'react';
import './grid.css';

export default class Grid extends React.Component {
	render() {
		function renderGrid(matrix) {
			let grid = [];
			for (let x = 0; x < matrix.length; x++) {
				for(let y = 0; y < matrix[x].length; y++) {
					let node = matrix[x][y];
					let xId = x.toString();
					let yId = y.toString();
					if(node.node) {
						grid.push(<div className="newDiv partOfPath" key={xId + yId} id={xId + yId}></div>);
					} else {
						grid.push(<div className="newDiv" key={xId + yId} id={xId + yId}></div>);
					}
				}
			}
			return grid;
		}

		function createGrid() {
			let matrix = [];
			for(let x = 0; x <= 10; x++) {
				let row = [];
				for(let y = 0; y <= 25; y++) {
					row.push({x: x, y: y});
				}
				matrix.push(row);
			}
			return matrix
		}

		function createPath(matrix, row=10, column) {
			if(row === 0) {
				return matrix;
			}
			if(!column) {
				column = Math.floor(Math.random()*25);
				matrix[row][column] = {x: row, y: column, node: true};
			}
			const nextNode = chooseNode(matrix, row, column);
			nextNode.node = true;
			matrix[nextNode.x][nextNode.y] = nextNode;
			createPath(matrix, nextNode.x, nextNode.y);
		}

		function chooseNode(matrix, row, column) {
			let nodes = possibleNodes(matrix, row, column);
			let randomNumber = Math.floor(Math.random()*nodes.length);
			return nodes[randomNumber];
		}

		function possibleNodes(matrix, row, column) {
				let nodes = [];
			if(row !== 0) {
				if(!matrix[row-1][column].node) {
					nodes.push({x: row-1, y: column})
				}
			}
			if(column !== 0) {
				if(!matrix[row][column-1].node) {
					nodes.push({x: row, y: column-1})
				}
			}
			if(column !== 25) {
				if(!matrix[row][column+1].node) {
					nodes.push({x: row, y: column+1})
				}
			}
			return nodes;
		}

	const matrix = createGrid();
	createPath(matrix);
		return (
			<div id="grid">
				{renderGrid(matrix)}
			</div>
			);
	}
}