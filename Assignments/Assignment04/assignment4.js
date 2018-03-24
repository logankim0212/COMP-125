// JavaScript source code

// dropdown menu
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

// Validate Input
function validateForm()
{
    // variables
    var a=document.forms["Registration"]["FirstName"].value;
    var b=document.forms["Registration"]["LastName"].value;
    var c=document.forms["Registration"]["Address"].value;
    var d=document.forms["Registration"]["City"].value;
    var e=document.forms["Registration"]["PostalCode"].value;
    var f=document.forms["Registration"]["Age"].value;
    var g=document.forms["Registration"]["Password"].value;
    var h=document.forms["Registration"]["Confirm"].value;
    var i=document.forms["Registration"]["Email"].value;
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    var postalCheck = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    try {
        // check if the First Name is empty
        if ((a === '') || (a === null)) {
            throw new Error('First name must be filled out');
        }
        // check if the Last Name is empty
        if ((b === '') || (b === null)) {
            throw new Error('Last name must be filled out');
        }
        // check if the Address is empty
        if ((c === '') || (c === null)) {
            throw new Error('Adress must be filled out');
        }
        // check if the City is empty
        if ((d === '') || (d === null)) {
            throw new Error('City must be filled out');
        }
        // check if the Postal Code is empty
        if ((e === '') || (e === null)) {
            throw new Error('Postal Code must be filled out');
        }
        // check if the postal code is in valid format
        if (postalCheck.test(e) === false) {
            throw new Error('Invalid Postal Code! Please enter in A0A0A0 format');
        }
        // check if the Age is empty
        if ((f === '') || (f === null)) {
            throw new Error('Age must be filled out');
        }
        // check if the Age is at least 18
        if (f < 18) {
            throw new Error('Age has to be at least 18 years old');
        }
        // check if the Password is empty
        if ((g === '') || (g === null)) {
            throw new Error('Password must be filled out');
        }
        // check if the number of characters of Password is at least 6
        if (g.length < 6) {
            throw new Error('Passwords must have at least 6 characters');
        }
        // check if the Confirm is empty
        if ((h === '') || (h === null)) {
            throw new Error('Confirm must be filled out');
        }
        // check if the Password and Confirm are matched
        if (g != h) {
            throw new Error('The Confirm Password and Password fields should have identical input');
        }
        // check if the Email is empty
        if ((i === '') || (i === null)) {
            throw new Error('Email must be filled out');
        }
        // check if it is a valid email address
        if (emailCheck.test(i) === false) {
            throw new Error('Please provide a valid email address');
        }
        // alert that registration is completed
        alert("Thanks for the registration, your customer record is created successfully");
        return true;
    } // end try
    catch (formError) {
        // alert error message if applicable
        alert(formError.message);
        return false;
    } // end catch
} // end validateForm()
