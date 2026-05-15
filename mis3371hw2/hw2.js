/*
Program name: lunafamilyclinic
Author: Arti Luna
Date created: 03/27/2026
Date last edited: 03/27/2026
Version: 1.0
Description:hw2 js
*/

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
let output = document.getElementById("rangepain");
output.innerHTML = slider.value;

function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dobcheck").innerHTML = 
        "Date cannot be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dobcheck").innerHTML = 
        "Date cannot be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dobcheck").innerHTML = "";
        return true;
    }
}
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssncheck").innerHTML = 
        "Enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssncheck").innerHTML = "";
        return true;
    }
}

function validateZipcode() {
    const zipInput = document.getElementById("zipcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zcodecheck").innerHTML = 
        "Zipcode is required";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zipcodecheck").innerHTML = "";
    return true;
}
function validateEmailaddress() {
    email = document.getElementById("emailaddress").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
    document.getElementById("emailaddresscheck").innerHTML =
    "Email address is required";
    return false;
    } else if (!email.match(emailR)) {
    document.getElementById("emailaddresscheck").innerHTML =
    "Enter a valid Email address";
    return false;
    } else {
    document.getElementById("emailaddresscheck").innerHTML ="";
    return true;
    }
}
















