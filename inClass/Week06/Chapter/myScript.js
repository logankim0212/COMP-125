var billingInputs, deliveryInputs, same;

function copyAddress() {
	billingInputs = document.querySelectorAll("#billingAddress input");
	deliveryInputs = document.querySelectorAll("#deliveryAddress input");
	if (document.getElementById("sameAddr").checked) {
		for (var i = 0; i < billingInputs.length; i++) {
			deliveryInputs[i + 1].value = billingInputs[i].value;
		}
		document.getElementById("deliveryAddress").value = document.getElementById("billingAddress").value;
	} else {
		for (var i = 0; i < billingInputs.length; i++) {
			deliveryInputs[i + 1].value = "";
		}
		document.getElementById("deliveryAddress").selectedIndex = -1;
	}
}

function createEventListeners() {
	same = document.getElementById("sameAddr");
	if (same.addEventListener) {
		same.addEventListener("click", copyAddress, false);
	} else if (same.attachEvent) {
		same.attachEvent("onclick", copyAddress);
	}
}

function setUpPage() {
	createEventListeners();
}

if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}
