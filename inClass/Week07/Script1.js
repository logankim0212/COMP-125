/*function myFunction() {
    var today = new Date();
    var curDay = today.getDay();


    document.getElementById("DAYS").innerHTML = curDay;
}

function myFunction() {
    var curDate = new Date();
    curDate.getDate();

    document.getElementById("DATE").innerHTML = curDate;
}

function myFunction() {
    var today = new Date();
    var curDay = today.getDay();
    var weekday;
    if (curDay === 0) {
        weekday = "Sunday";
    } else if (curDay === 1) {
        weekday = "Monday";
    } else if (curDay === 2) {
        weekday = "Tuesday";
    } else if (curDay === 3) {
        weekday = "Wednesday";
    } else if (curDay === 4) {
        weekday = "Thursday";
    } else if (curDay === 5) {
        weekday = "Friday";
    } else if (curDay === 6) {
        weekday = "Saturday";
    }


    document.getElementById("DAYS").innerHTML = weekday;
}

function myFunction() {
    var today = new Date();
    var months = ["January","February","March",
                   "April","May","June",
                   "July","August","September",
                   "October","November","December"];
    var curMonth = months[today.getMonth()];
    document.getElementById("MONTH").innerHTML =months;
}

function myFunction() {
    var today = new Date();
    var months = ["January","February","March",
                   "April","May","June",
                   "July","August","September",
                   "October","November","December"];
    var curMonth = months[today.getMonth()];
    document.getElementById("MONTH").innerHTML =curMonth;
}
*/
var x = 9.656;
document.getElementById("FIXEDPOINT").innerHTML =
    x.toFixed(0) + "<br>" +
    x.toFixed(2) + "<br>" +
    x.toFixed(4) + "<br>" +
    x.toFixed(6);
