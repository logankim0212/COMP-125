function copyBillingAddress() {
    var billingInputElements =
document.querySelectorAll("#billingAddress input");
    var deliveryInputElements =
document.querySelectorAll("#deliveryAddress input");
    if (document.getElementByID("sameAddr").checked) {
        for (var i = 0; i < billingInputElements.length; i++) {
            deliveryInputElements[i + 1].value = billingInputElements[i].value;
        }
        document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value
    }
    else {
        for (var i = 0; i < billingInputElements.length; i++) {
            deliveryInputElements[i + 1].value = "";
        }
        document.querySelector("#deliveryAddress select").selectedIndex = -1;
    }
}
function setUpPage() {
    var same = document.getElementById("sameAddr");
    if (same.addEventListener) {
        same.addEventListener("click", copyBillingAddress, false);
    } else if (same.attachEvent)  {
        same.attachEvent("onclick", copyBillingAddress);
    }
}
