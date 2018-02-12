// JavaScript source code

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

// global variables
var provinces = ["Ontario", "British Columbia", "Saskatchewan", "Alberta", "Manitoba", "Prince Edward Island", "New Brunswick", "Nova Scotia", "Quebec"];

provinces[9] = "Newfoundland and Labrador";

function addLists() {
    var i = 0;
    while (i < provinces.length) {
        document.getElementsByTagName("li")[i].innerHTML = provinces[i];
        i++;
    }
}

function setUpPage() {
    addLists();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
