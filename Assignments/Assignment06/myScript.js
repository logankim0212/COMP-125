"use strict"; // interpret document contents in JavaScript strict mode

// dropdown menu
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = $("#myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

/* global variables */
var photoOrder = [1,2,3,4,5];
var autoAdvance = setInterval(rightAdvance,5000);
var figureCount = 3;
/* add src values to img elements based on order specified in
photoOrder array */
function populateFigures() {
    var filename;
    var currentFig;
    for (var i = 1; i < 4; i++) {
        filename = "images/IMG_0" + photoOrder[i] + ".jpg";
        currentFig = $("img")[i - 1];
        currentFig.src = filename;
        // fade in and fade out
        $("#fig2").hide().fadeIn(750).delay(3500).fadeOut(750).show();
        $("#fig3").hide().fadeIn(1500).delay(2000).fadeOut(1500).show();
        $("#fig4").hide().fadeIn(750).delay(3500).fadeOut(750).show();
    }
}

/* stop automatic image switching and call rightAdvance() function */
function rightArrow() {
    rightAdvance();
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i] + 1) === 6) {
            photoOrder[i] = 1;
        } else {
            photoOrder[i] += 1;
        }
        populateFigures();
    }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i] - 1) === 0) {
            photoOrder[i] = 5;
        } else {
            photoOrder[i] -= 1;
        }
        populateFigures();
    }
}

// update button
function Update() {
    photoOrder = [1,2,3,4,5];
    populateFigures();
}

/* create event listeners for left arrow, right arrow, and 2 center figure element */
function createEventListeners() {
    var leftarrow = document.getElementById("leftarrow");
    if (leftarrow.addEventListener) {
        leftarrow.addEventListener("click", leftArrow, false);
    } else if (leftarrow.attachEvent)  {
        leftarrow.attachEvent("onclick", leftArrow);
    }
    var rightarrow = document.getElementById("rightarrow");
    if (rightarrow.addEventListener) {
        rightarrow.addEventListener("click", rightArrow, false);
    } else if (rightarrow.attachEvent)  {
        rightarrow.attachEvent("onclick", rightArrow);
    }
    var update = document.getElementById("update");
    if (rightarrow.addEventListener) {
        update.addEventListener("click", Update, false);
    } else if (rightarrow.attachEvent)  {
        update.attachEvent("onclick", Update);
    }
}

/* create event listeners and populate image elements */
function setUpPage() {
    createEventListeners();
    populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}
