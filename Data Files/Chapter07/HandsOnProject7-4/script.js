// JavaScript source code
var infoD = {};
var summaryD = document.getElementById("deliverTo");

function preview() {
    processing();
    document.getElementsByTagName("section")[0].style.display = "block";
}
function processing() {
    infoD.name = document.getElementById("nameinput").value;
    infoD.addr = document.getElementById("addrinput").value;
    infoD.city = document.getElementById("cityinput").value;
    infoD.email = document.getElementById("emailinput").value;
    infoD.phone = document.getElementById("phoneinput").value;
    for (var proc in infoD) {
        summaryD.innerHTML += "<p>" + infoD[proc] + "</p>";
    }
    document.getElementById("deliverTo").style.display = "block";
}
function createEventListener() {
    var button = document.getElementById("previewBtn");
    if (button.addEventListener) {
        button.addEventListener("click", preview, false);
    } else if (button.attachEvent) {
        button.attachEvent("onclick", preview);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}
