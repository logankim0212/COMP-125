var x = 3800, y = 2900;
var interval = 1000;

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.style.width = "60%";
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/leaf.jpg";

// Bug image
var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
	bugReady = true;
};
bugImage.src = "images/bug.png";

// Game objects
var bug = {};
var bugsCaught = 0;

// Reset the game when the player catches a monster
var reset = function () {
	// Throw the monster somewhere on the screen randomly
	bug.x = x + (Math.random() * (canvas.width - 3920));
	bug.y = y;
	do {
		move();
	} while (bug.y < -750)
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0, canvas.width = 3920, canvas.height = 2880);
	}

	if (bugReady) {
		ctx.drawImage(bugImage, bug.x, bug.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "100px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Bugs caught: " + bugsCaught, 32, 32);
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	render();

	then = now;

	// Request to do this again ASAP
    requestAnimationFrame(main);
    setInterval(reset, interval);
};

function move() {
    y -= 10;
    x = bug.x;
}

window.addEventListener('click', function(e) {
    e.preventDefault();
    reset.Input.set(e);
}, false);

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();