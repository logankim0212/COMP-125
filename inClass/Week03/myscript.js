// JavaScript source code
var places = ["Fargo", "Las Vegas", "Sacramentor", "Newark", "Murfressboro"];
places[1] = "Quebec";
places[5] = "Newbrunswick";
function processplaces() {
    /*for (var i = 0; i < places.length; i++) {
        listItem = "item" + (i + 1);
        document.getElementById(listItem).innerHTML = places[i];
    }

    var i = 0;
    do {
        listItem = "item" + (i + 1);
        document.getElementById(listItem).innerHTML = places[i];
        i++;
    } while (i < places.length)
*/
    var i = 0;
    while (i < places.length) {
        listItem = "item" + (i + 1);
        document.getElementById(listItem).innerHTML = places[i];
        i++;
    }
}
if (window.addEventListener) {
    window.addEventListener("load", processplaces, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", processplaces);
}
