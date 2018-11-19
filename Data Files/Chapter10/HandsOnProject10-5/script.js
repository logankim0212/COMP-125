/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-5

    Author: 
    Date:   

    Filename: script.js
*/
"use strict";
var waitForUser;
function geoTest() {
    waitForUser = setTimeout(fail, 10000);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(createMap, fail, {timeout: 10000});
    } else {
        fail();
    }
}
function createMap(position) {
    var Lat;
    var Lng;
    clearTimeout(waitForUser);
    if (position.coords) {
        Lat = position.coords.latitude;
        Lng = position.coords.longitude;
    } else {
        var city = this.innerHTML;
        if (city === "Beijing") {
            Lat = "39.9042";
            Lng = "116.4074";
        } else if (city === "Paris") {
            Lat = "48.8566";
            Lng = "2.3522";
        } else if (city === "Rio de Janeiro") {
            Lat = "-22.9068";
            Lng = "-43.1729";
        } else if (city === "Bogotá") {
            Lat = "4.7110";
            Lng = "-74.0721";
        } else if (city === "Seoul") {
            Lat = "37.5665";
            Lng = "126.9780";
        }
        document.getElementById("caption").innerHTML = city;
    }
    var mapOptions = {
        center: new google.maps.LatLng(Lat, Lng),
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
function fail() {
    document.getElementById("map").innerHTML = "Unable to access your current location.";
}
function setUpPage() {
    var cityDiv = document.querySelectorAll("#cities div");
    for (var i = 0; i < cityDiv.length; i++) {
        cityDiv[i].addEventListener("click", createMap, false);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
