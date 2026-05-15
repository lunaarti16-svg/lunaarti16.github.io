/*
Name: Arti Luna
Date created: 02/25/2026
Date last edited: 02/25/2026
Version: 1
Description: Homework 2 JS 
*/
//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;
//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
