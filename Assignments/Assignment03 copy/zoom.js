/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author:   Logan Kim
 *    Date:     March 5, 2018

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var index = window.location.search.substring(1).split('=')[1];

/* populate img element and create event listener */
function pageSetup() {
    document.getElementById("newImage").src = index; // assign filename to img element
    createEventListener();
}

/* close window */
function closeWin() {
    window.close();
}

/* add to favorites */
function addToFavs() {
    window.opener.postMessage(index, '*');
}

/* create event listener for close button and add to favorites */
function createEventListener() {
    // close window button
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    if (closeWindowDiv.addEventListener) {
        closeWindowDiv.addEventListener("click", closeWin, false);
    } else if (closeWindowDiv.attachEvent) {
        closeWindowDiv.attachEvent("onclick", closeWin);
    }

    // add to favorites button
    var addToFavsDiv = document.getElementsByTagName("p")[1];
    if (addToFavsDiv.addEventListener) {
      addToFavsDiv.addEventListener("click", addToFavs, false);
    } else if (addToFavsDiv.attachEvent) {
      addToFavsDiv.attachEvent("onclick", addToFavs);
    }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;
