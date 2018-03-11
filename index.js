


// function createPath() {
// 	let row = 0;
// 	let randomColumn = Math.floor(Math.random()*6);
// 	let lastRandomColumn = Math.floor(Math.random()*6);
// 	let firstCell = document.getElementById(`0${randomColumn}`);
// 	let lastCell = document.getElementById(`10${lastRandomColumn}`);
// 	if(firstCell) {
// 		firstCell.classList.add('partOfPath');
// 	} if(lastCell) {
// 		lastCell.classList.add('partOfPath');
// 	}
// 	do {
// 		createNewPath(row, randomColumn);
// 		row = Math.floor(Math.random()*10);
// 	} while (row <= 5)
// }

// //choose random direction of next path item
// function createPathItem(row, column) {

// }

// //return directions available from current path cell


// function createNewPath(row, column) {
// 	for (let i = 0; i <= 6; i++) {
// 		for (let j = 0; j <= 11; j++) {
// 			let newXCell = Math.floor(Math.random()*(j-row) + row);
// 			let newYCell = Math.floor(Math.random()*(i-column)+column);
// 			document.getElementById(`${newXCell}${newYCell}`).classList.add('partOfPath');
// 		}
// 	}
// }


function createGrid() {
	let matrix = [];
	for (let x = 0; x <= 9; x++) {
		let row = [];
		for(let y = 0; y <= 4; y++) {
			row.push({x, y});
			// let newDiv = document.createElement('div');
			// newDiv.className = 'newDiv';
			// let textNode = document.createTextNode(`[${i}][${j}]`);
			// newDiv.appendChild(textNode);
			// newDiv.dataset.x = i;
			// newDiv.dataset.y = j;
			// newDiv.setAttribute('id', `${i}${j}`);
			// document.getElementById('grid').appendChild(newDiv);
		}
		matrix.push(row);
	}
	return matrix;
}

function createPath(matrix, row=9, column=Math.floor(Math.random()*4)) {
	if(row === 0) {
		return matrix;
	}
	const nextNode = chooseNode(matrix, row, column);
	nextNode.node = true;
	matrix[nextNode.x][nextNode.y] = nextNode;
	console.log(matrix);
	createPath(matrix, nextNode.x, nextNode.y);
}

function chooseNode(matrix, row, column) {
	let nodes = possibleNodes(matrix, row, column);
	let randomNumber = Math.floor(Math.random()*nodes.length);
	return nodes[randomNumber];
}

function possibleNodes(matrix, row, column) {
	let nodes = [];
	if(row !== 9) {
		if(!matrix[row+1].node) {
			nodes.push({x: row+1, y: column})
		}
	}
	if(row !== 0) {
		if(!matrix[row-1].node) {
			nodes.push({x: row-1, y: column})
		}
	}
	if(column !== 0) {
		if(!matrix[column-1].node) {
			nodes.push({x: row, y: column-1})
		}
	}
	if(column !== 4) {
		if(!matrix[column+1].node) {
			nodes.push({x: row, y: column+1})
		}
	}
	return nodes;
}

const matrix = createGrid();
console.log(createPath(matrix));