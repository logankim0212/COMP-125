//Javascript Source Code

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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function CalculateMetric() {

    var gender, weight, height, age, level, firstop, secondop, thirdop, total, calories;

    gender = document.getElementById("genderMetric").value;
    weight = document.getElementById("weightMetric").value;
    height = document.getElementById("heightMetric").value;
    age = document.getElementById("ageMetric").value;
    level = document.getElementsByClassName("levelMetric").value;

    if (gender == "male")
    {
        firstop = 13.75 * weight;
        secondop = 5.003 * height;
        thirdop = 6.755 * age;
        total = 66.47 + firstop + secondop - thirdop;
        calories = total * level;
    }
    else if (gender == "female") {
        firstop = 9.563 * weight;
        secondop = 1.85 * height;
        thirdop = 4.676 * age;
        total = 655.1 + firstop + secondop - thirdop;
        calories = total * level;
    }
    alert('Your body will burn ' + total.toFixed(2) + ' calories each day. Based upon this, your daily calorie requirement would be ' + calories.toFixed(2) + ' calories.');
}

function CalculateImperial() {

    var gender, age, level, firstop, secondop, thirdop, total, calories, stone, pound, inch, feet, height, weight, feetToInch, stoneToPound;

    gender = document.getElementById("genderImperial").value;
    stone = document.getElementById("stoneImperial").value;
    pound = document.getElementById("poundImperial").value;
    feet = document.getElementById("feetImperial").value;
    inch = document.getElementById("inchImperial").value;
    age = document.getElementById("ageImperial").value;
    level = document.getElementsByClassName("levelImperial").value;

    height = parseInt(feet) * 12 + parseInt(inch);
    weight = parseInt(stone) * 14 + parseInt(pound);

    if (gender == "male")
    {
        firstop = 6.24 * weight;
        secondop = 12.7 * height;
        thirdop = 6.755 * age;
        total = 66.47 + firstop + secondop - thirdop;
        calories = total * level;
    }
    else if (gender == "female") {
        firstop = 4.35 * weight;
        secondop = 4.7 * height;
        thirdop = 4.7 * age;
        total = 655.1 + firstop + secondop - thirdop;
        calories = total * level;
    }

    alert('Your body will burn ' + total.toFixed(2) + ' calories each day. Based upon this, your daily calorie requirement would be ' + calories.toFixed(2) + ' calories.');
}
