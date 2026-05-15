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

slider.oninput = function () {
    output.innerHTML = this.value;
};

function validateDob() {
    const dob = document.getElementById("dob");
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
        document.getElementById("zipcodecheck").innerHTML = 
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

function validatePhonenumber() {
    const phoneInput = document.getElementById("phonenumber");
    const phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length !== 10) {
        document.getElementById("phonenumbercheck").innerHTML =
            "Phone number is required";
        return false;
    }

    const formattedPhone =
        phone.slice(0, 3) + "-" +
        phone.slice(3, 6) + "-" +
        phone.slice(6, 10);

    phoneInput.value = formattedPhone;
    document.getElementById("phonenumbercheck").innerHTML = "";
    return true;
}

function validateUserid() {
    userid = document.getElementById("userid").value;

    
    userid = userid.toLowerCase();
    document.getElementById("userid").value = userid;

    if (userid.length == 0) {
        document.getElementById("useridcheck").innerHTML = 
        "User ID is required";
        return false;
    }

    if (!isNaN(userid.charAt(0))) {
        document.getElementById("useridcheck").innerHTML = 
        "User ID cannot begin with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(userid)) {
        document.getElementById("useridcheck").innerHTML = 
        "User ID can only have letters, underscores, numbers, and dashes";
        return false;
        
    } else if (userid.length < 5) {
        document.getElementById("useridcheck").innerHTML = 
        "User ID has to be at least 5 characters";
        return false;
        
    } else if (userid.length > 30) {
        document.getElementById("useridcheck").innerHTML = 
        "User ID cannot be more than 30 characters";
        return false;
    } else {
        document.getElementById("useridcheck").innerHTML = "";
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const userid = document.getElementById("userid").value;

    const errorMessage = [];

    if (!password.match(/[A-Z]/)) {
        errorMessage.push("Enter one uppercase letter");
    }
    if (!password.match(/[a-z]/)) {
        errorMessage.push("Enter one lowercase letter");
    }
   
    if (!password.match(/[0-9]/)) {
        errorMessage.push("Enter one Number");
    }
    
    if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter one special character");
    }
    
    if (password == userid|| password.includes(userid)) {
        errorMessage.push("Password cannot have userid");
    }
   
    const errorContainer = document.querySelector(".passwordmessage");
    errorContainer.innerHTML = errorMessage
    .map(msg => `<span>${msg}</span><br>`)
    .join("");
}                                           

function rePassword() {
    password = document.getElementById("password").value;
    repassword = document.getElementById("repassword").value;

    if (password !== repassword) {
        document.getElementById("repasswordcheck").innerHTML = 
        "Passwords DON'T MATCH!!";
        return false;
    } else {
        document.getElementById("repasswordcheck").innerHTML = 
        "Passwords MATCH!!";
        return true;
    }
}

function reviewInput() {
    var formcontent = document.getElementById("signup");

    var formoutput =
        "<table class='output'><tr><th colspan='2'>Review all of your information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;

        var label = document.querySelector(`label[for="${el.id}"]`);
        var displayName = label ? label.innerText : el.name;
        var value = el.value;

        if (!displayName) continue;

        switch (datatype) {

           case "checkbox":
    if (el.checked) {
        formoutput += "<tr><td align='right'>" + displayName + "</td>";
        formoutput += "<td class='outputdata'>" + el.value + "</td></tr>";
    }
    break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + displayName + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                formoutput += "<tr><td align='right'>" + displayName + "</td>";
                formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                break;

            case "button":
            case "submit":
            case "reset":
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + displayName + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}












