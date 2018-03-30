// JavaScript Source Code
function greetingInfo() {
    if (location.search) {
        var greetingText = location.search;
        greetingText = greetingText.replace("+", " ");
        greetingText = greetingText.substring(greetingText.lastIndexOf("=") + 1);
        document.getElementById("greetingtext").innerHTML = decodeURIComponent(greetingText);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", greetingInfo, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", greetingInfo);
}
