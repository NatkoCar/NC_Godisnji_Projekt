// Reference the color shape that was drawn over the image
const overlay1 = document.getElementById("g_body");
const overlay2 = document.getElementById("g_head");
const overlay3 = document.getElementById("g_pickguard");

// Click on a color

var el = document.getElementsByClassName("color1");
for (var i = 0; i < el.length; i++) {
    el[i].onclick = changeColor1;
}
var el = document.getElementsByClassName("color2");
for (var i = 0; i < el.length; i++) {
    el[i].onclick = changeColor2;
}
var el = document.getElementsByClassName("color3");
for (var i = 0; i < el.length; i++) {
    el[i].onclick = changeColor3;
}

function changeColor1(e) {
    // get the hex color
    let hex = e.target.getAttribute("data-hex");
    overlay1.style.fill = hex;
    overlay1.style.opacity = 1;
}

function changeColor2(e) {
    // get the hex color
    let hex = e.target.getAttribute("data-hex");
    overlay2.style.fill = hex;
    overlay2.style.opacity = 1;
}

function changeColor3(e) {
    // get the hex color
    let hex = e.target.getAttribute("data-hex");
    overlay3.style.fill = hex;
    overlay3.style.opacity = 1;
}

var resetBtn1 = document.getElementById("reset-btn1");
resetBtn1.onclick = resetColor1;
var resetBtn2 = document.getElementById("reset-btn2");
resetBtn2.onclick = resetColor2;
var resetBtn3 = document.getElementById("reset-btn3");
resetBtn3.onclick = resetColor3;

function resetColor1() {
    overlay1.style.opacity = 0;
}

function resetColor2() {
    overlay2.style.opacity = 0;
}

function resetColor3() {
    overlay3.style.opacity = 0;
}