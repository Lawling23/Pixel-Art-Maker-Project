const pixelForm = document.getElementById('sizePicker');
const tableRowInput = document.getElementById('inputHeight');
const tableColumnInput = document.getElementById('inputWidth');
const colorPicker = document.getElementById ('colorPicker');
const table = document.getElementById('pixelCanvas');

function makeTable() {
	for( let row = 0; row< tableRowInput.value; row++){
		const tableRow = document.createElement('tr')
		for (let col = 0; col< tableColumnInput.value; col++){
			const tableCol = document.createElement('td')
			tableCol.addEventListener('click', pickColor)
			tableRow.appendChild(tableCol)
		}
		table.appendChild(tableRow)
	
	}
}


function pickColor(event) {
	event.target.style.backgroundColor = colorPicker.value

}

function startPixelArt(event) {
	event.preventDefault();
	makeTable();
}


pixelForm.addEventListener('submit', startPixelArt);

