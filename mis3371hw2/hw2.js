/*
Program name: lunafamilyclinic orm.html
Author: Arti Luna
Date created: 03/27/2026
Date last edited: 03/27/2026
Version: 1.0
Description:hw2 js
*/
//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
