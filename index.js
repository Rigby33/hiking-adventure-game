function createGrid() {
	let matrix = [];
	for (let x = 0; x <= 10; x++) {
		let row = [];
		for(let y = 0; y <= 5; y++) {
			row.push({x, y});
			let newDiv = document.createElement('div');
			newDiv.className = 'newDiv';
			let textNode = document.createTextNode(`[${x}][${y}]`);
			newDiv.appendChild(textNode);
			newDiv.dataset.x = x;
			newDiv.dataset.y = y;
			newDiv.setAttribute('id', `${x}${y}`);
			document.getElementById('grid').appendChild(newDiv);
		}
		matrix.push(row);
	}
	return matrix;
}

function createPath(matrix, row=10, column=Math.floor(Math.random()*5)) {
	if(row === 0) {
		return matrix;
	}
	const nextNode = chooseNode(matrix, row, column);
	nextNode.node = true;
	matrix[nextNode.x][nextNode.y] = nextNode;
	createPath(matrix, nextNode.x, nextNode.y);
	console.log(`${nextNode.x}${nextNode.y}`);
	for (let i = 0; i < matrix.length; i++) {
		if(document.getElementById(`${nextNode.x}${nextNode.y}`) && nextNode.node === true) {
			document.getElementById(`${nextNode.x}${nextNode.y}`).classList.add('partOfPath');
		}
	}
}

function chooseNode(matrix, row, column) {
	let nodes = possibleNodes(matrix, row, column);
	let randomNumber = Math.floor(Math.random()*nodes.length);
	return nodes[randomNumber];
}

function possibleNodes(matrix, row, column) {
	let nodes = [];
	if(row !== 10) {
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
	if(column !== 5) {
		if(!matrix[column+1].node) {
			nodes.push({x: row, y: column+1})
		}
	}
	return nodes;
}

const matrix = createGrid();
createPath(matrix);