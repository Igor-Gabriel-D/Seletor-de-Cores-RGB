let displayColor = document.querySelector('#display-color')

let objRed = document.querySelector('#red');
let numRed = document.querySelector('.num-red');
objRed.addEventListener('input', defColor);

let objGreen = document.querySelector('#green');
let numGreen = document.querySelector('.num-green');
objGreen.addEventListener('input', defColor);


let objBlue = document.querySelector('#blue');
let numBlue = document.querySelector('.num-blue');
objBlue.addEventListener('input', defColor);

function defColor() {
	
	numRed.innerHTML = objRed.value;
	numGreen.innerHTML = objGreen.value;
	numBlue.innerHTML = objBlue.value;

	displayColor.style.backgroundColor = `rgb(${objRed.value}, ${objGreen.value}, ${objBlue.value})`;
}

defColor()