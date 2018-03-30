//JavaScript Source Code
function resetCookies() {
    var cookieString = document.cookie;
    var cookieArray = cookieString.split("; ");
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 7);
    for (var i = 0; i < cookieArray.length; i++) {
        document.cookie = cookieArray[i] + "; expires=" + expireDate.toUTCString();
    }
}
if (window.addEventListener) {
    window.addEventListener("load", resetCookies, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", resetCookies);
}
