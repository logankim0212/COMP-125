// JavaScript Source Code
'user strict';

// global variableds
var score = 0, speed = 4000, alive = true, canvas, context, bugAlive, bugDead, bugLocation, gameLoop;

// update score
function updateScore() {
	document.getElementById('score').innerHTML = 'Score: ' + ++score;
}

// increase difficulty
function increaseDifficulty() {
	speed -= 100;
}

// get random value
function getRandomValue(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// mouse click
function mouseClick(e) {
	// convert mouse coord to canvas X, Y
	var rect = this.getBoundingClientRect(),
	  mouseX = Math.round(e.clientX - rect.left),
	  mouseY = Math.round(e.clientY - rect.top);
	
	// hit box
	if ((mouseX > bugLocation.x - bugAlive.width / 2 && mouseX < bugLocation.x + bugAlive.width / 2) && 
	(mouseY > bugLocation.y - bugAlive.height / 2 && mouseY < bugLocation.y + bugAlive.height / 2)) {
		if (alive) {
		killTheBug();
		}
	}
}

// when the bug is popped
function POP() {
	clearTimeout(gameLoop);
  
	// compute new bug coordinates
	bugLocation = {
	  	x: getRandomValue(0, canvas.width - bugAlive.width),
	  	y: getRandomValue(0, canvas.height - bugAlive.height),
	}
  
	// clear canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
  
	// draw bug
	context.drawImage(bugAlive, bugLocation.x, bugLocation.y);
  
	// set bug state = alive
	alive = true;
  
	// schedule the bug next move
	gameLoop = setTimeout(function() {
	  	POP();
	}, speed);
}

// when the bug is killed
function killTheBug() {
	alive = false;

	// clear canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
  
	// draw dead bug
	context.drawImage(bugDead, bugLocation.x, bugLocation.y);

	clearTimeout(gameLoop);  
	gameLoop = setTimeout(function() { POP(); }, 500);
  
	// update score and increase difficulty
	updateScore();
	increaseDifficulty();
}

// set up
function setUp() {
	// canvas
	canvas = document.getElementById('canvas');
  	canvas.addEventListener('click', mouseClick, false);
	canvas.width = 825;
	canvas.height = 550;
	context = canvas.getContext('2d');

	// bug
	bugAlive = new Image();
	bugAlive.src = 'images/mosquito.png';

	// dead bug
	bugDead = new Image();
	bugDead.src = 'images/bugKilled.png';
	bugDead.onload = function () {
	  	POP();
	};
  
	// reset score
	document.getElementById('resetScore').addEventListener('click', function() {
	  	score = -1;
	  	updateScore();
	});

	// reset speed
	document.getElementById('resetSpeed').addEventListener('click', function() {
	  	speed = 3000;
	});
}

// browser
if (window.addEventListener) {
	window.addEventListener("load", setUp, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUp);
}