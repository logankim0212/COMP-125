//Javascript Source Code
function CalculateMetric() {

    var gender, weight, height, age, level, firstop, secondop, thirdop, total, calories;

    gender = document.getElementById("genderMetric").value;
    weight = document.getElementById("weightMetric").value;
    height = document.getElementById("heightMetric").value;
    age = document.getElementById("ageMetric").value;
    level = document.getElementById("levelMetric").value;

    if (gender == "male")
    {
        firstop = 13.75 * weight;
        secondop = 5.003 * height;
        thirdop = 6.755 * age;
        total = 66 + firstop + secondop - thirdop;
        calories = total * level;
    }
    else if (gender == "female") {
        firstop = 9.563 * weight;
        secondop = 1.850 * height;
        thirdop = 4.676 * age;
        total = 655.1 + firstop + secondop - thirdop;
        calories = total * level;
    }
    document.getElementById("BMR").innerHTML = calroies.toFixed(2);
}

function CalculateImperial() {

    var gender, weight, height, age, level, firstop, secondop, thirdop, total, calories;

    gender = document.getElementById("genderImperial").value;
    weight = document.getElementById("weightImperial").value;
    height = document.getElementById("heightImperial").value;
    age = document.getElementById("ageImperial").value;
    level = document.getElementById("levelImperial").value;

    if (gender == "male")
    {
        firstop = 6.2 * weight;
        secondop = 12.7 * height;
        thirdop = 6.76 * age;
        total = 66.5 + firstop + secondop - thirdop;
        calories = total * level;
    }
    else if (gender == "female") {
        firstop = 4.35 * weight;
        secondop = 4.7 * height;
        thirdop = 4.7 * age;
        total = 655.1 + firstop + secondop - thirdop;
        calories = total * level;
    }
    document.getElementById("BMR1").innerHTML = calroies.toFixed(2);
}
