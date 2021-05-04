
console.log("work");

function starsEverywhere(){
	let allStarContainers = document.querySelectorAll(".star");
	allStarContainers.forEach(function(star){
		let randomHorizontalPosition = Math.floor(Math.random() * window.innerWidth);
		let randomVerticalposition = Math.floor(Math.random() * window.innerHeight);
		star.style.top = randomVerticalposition + "px";
		star.style.left = randomHorizontalPosition + "px";
		star.addEventListener("click", event => {
			star.classList.add("hide");
		})
	})
}

document.addEventListener('keydown', addStar);

function addStar(event){
	console.log(event);

	if (event.key === "s") {
		let newStar = document.createElement("div");
		newStar.classList.add("star");
		document.body.appendChild(newStar);
		starsEverywhere();
	}
}

starsEverywhere();

let popupbutton = document.querySelector(".popup");
popupbutton.addEventListener("click", myFunctionTwo);
function myFunctionTwo(){
	var popup = document.getElementById("myPopup");
  	popup.classList.toggle("show");
}

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// const button3 = document.getElementById(".button3");
// let isDrawing = false;

// button3.addEventListener('click', drawLine);
// canvas.addEventListener('mousedown', start);
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', stop);

// function drawLine(){

// }

const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

clearButton.addEventListener('click', clearCanvas);

function start (e) {
  isDrawing = true;
  draw(e);
}

function draw ({clientX: x, clientY: y}) {
  if (!isDrawing) return;
  ctx.lineWidth = stroke_weight.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = color_picker.value;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function stop () {
  isDrawing = false;
  ctx.beginPath();
}

function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();