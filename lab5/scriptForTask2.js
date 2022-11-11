const Variant = 1;

function createTable() {
	container = document.getElementById("task2");
	let table = document.createElement('table');
	for (let i = 0; i < 6; i++) {
		let row = document.createElement('tr');
		for (let j = 0; j < 6; j++) {
			cell = document.createElement('td');
			let value = i * 6 + j + 1;
			cell.innerHTML = value;
			cell.id = value;
			row.appendChild(cell);
		};
		table.appendChild(row);
	};
	container.appendChild(table);
};

function randomColor() {
	return '#' + Math.floor(Math.random()*20000).toString(16);
};

// При наведенні на клітинку, що відповідає номеру варіанта виконується зміна кольору на випадковий
function colorRandom(cell) {
	cell.style.backgroundColor = randomColor();
};

// якщо натиснути на клітинку, що відповідає варіанту - зміна кольору на обраний з палітри
function Click(cell) {
	const tool = document.getElementById('tool');
	cell.style.backgroundColor = tool.value;
};

// якщо подвійний клік, то зміна кольору уcього рядка
function dblClick(cell) {
	for (let i = Variant; i <=6; i ++) {
		document.getElementById(i).style.backgroundColor = tool.value;
	};
};
createTable();
myCell = document.getElementById(Variant);
myCell.addEventListener('mouseover', () => colorRandom(myCell));
myCell.addEventListener('click', () => Click(myCell));
myCell.addEventListener('dblclick', () => dblClick(myCell));



