// JavaScript source code
var infoD = {};
var summaryD = document.getElementById("deliverTo");
var  = {};
var summaryF = document.getElementById("order");

function preview() {
    processingD();
    processingF();
    document.getElementsByTagName("section")[0].style.display = "block";
}
function processingD() {
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
function processingF() {
    var topping = 0;
    var crust = document.getElementsByName("crust");
    var toppingBoxes = document.getElementsByName("toppings");
    var instruction = document.getElementById("instructions");
    if (crust[0].checked) {
        infoF.crust = crust[0].value;
    } else {
        infoF.crust = crust[1].value;
    }
    infoF.size = document.getElementById("size").value;
    for (var i = 0; i < toppingBoxes.length; i++) {
        if (toppingBoxes[i].checked) {
            topping++;
            infoF["topping" + topping] = toppingBoxes[i].value;
        }
    }
    if (instruction.value !== "") {
        infoF.instructions = instruction.value;
    }
    summaryF.innerHTML += "<p><span>Crust</span>: " + infoF.crust + "</p>";
    summaryF.innerHTML += "<p><span>Size</span>: " + infoF.size + "</p>";
    summaryF.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
    summaryF.innerHTML += "<ul>";
    for (var i = 0; i < 5; i++) {
        if (infoF["topping" + i]) {
            summaryF.innerHTML += "<li>" + infoF["topping" + i] + "</li>";
        }
    }
    summaryF.innerHTML += "</ul>";
    summaryF.innerHTML += "<p><span>Instructions</span>: " + infoF.instructions;
    document.getElementById("order").style.display = "block";
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
