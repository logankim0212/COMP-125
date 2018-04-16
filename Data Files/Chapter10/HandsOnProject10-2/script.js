/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-2

    Author: 
    Date:   

    Filename: script.js
*/

"use strict";
var loc = [];
var origin;
var onTop;
function setUpPage() {
   var puzzlePieces = document.querySelectorAll("#pieces div");
   onTop = puzzlePieces.length + 1;
   for (var i = 0; i < puzzlePieces.length; i++) {
      puzzlePieces[i].style.msTouchAction = "none";
      puzzlePieces[i].style.touchAction = "none";
      if (puzzlePieces[i].addEventListener) {
         puzzlePieces[i].addEventListener("mousedown", startDrag, false);
         puzzlePieces[i].addEventListener("touchstart", startDrag, false);
         puzzlePieces[i].addEventListener("mspointerdown", startDrag, false);
         puzzlePieces[i].addEventListener("pointerdown", startDrag, false);
      } else if (puzzlePieces[i].attachEvent) {
         puzzlePieces[i].attachEvent("onmousedown", startDrag);
      }
   }
}
function startDrag(event) {
   this.style.zIndex = onTop;
   onTop++;
   event.preventDefault();
   if (event.type !== "mousedown") {
      this.addEventListener("touchmove", moveDrag, false);
      this.addEventListener("mspointermove", moveDrag, false);
      this.addEventListener("pointermove", moveDrag, false);
      this.addEventListener("touchend", removeTouchListener, false);
      this.addEventListener("mspointerup", removeTouchListener, false);
      this.addEventListener("pointerup", removeTouchListener, false);
   } else {
      this.addEventListener("mousemove", moveDrag, false);
      this.addEventListener("mouseup", removeDragListener, false);
   }
   loc = [this.offsetLeft,this.offsetTop];
   origin = getCoords(event);
}
function moveDrag(event) {
   var currentPos = getCoords(event);
   var deltaX = currentPos[0] - origin[0];
   var deltaY = currentPos[1] - origin[1];
   this.style.left = (loc[0] + deltaX) + "px";
   this.style.top  = (loc[1] + deltaY) + "px";
}
function getCoords(event) {
   var coords = [];
   if (event.targetTouches && event.targetTouches.length) {
      var thisTouch = event.targetTouches[0];
      coords[0] = thisTouch.clientX;
      coords[1] = thisTouch.clientY;
   } else {
      coords[0] = event.clientX;
      coords[1] = event.clientY;
   }
   return coords;
}
function removeDragListener() {
   this.removeEventListener("mousemove", moveDrag, false);
   this.removeEventListener("mouseup", removeDragListener, false);
}
function removeTouchListener() {
   this.removeEventListener("touchmove", moveDrag, false);
   this.removeEventListener("mspointermove", moveDrag, false);
   this.removeEventListener("pointermove", moveDrag, false);
   this.removeEventListener("touchend", removeTouchListener, false);
   this.removeEventListener("mspointerup", removeTouchListener, false);
   this.removeEventListener("pointerup", removeTouchListener, false);
}
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
}