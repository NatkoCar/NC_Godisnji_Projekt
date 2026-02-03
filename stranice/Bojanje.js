const overlay1 = document.getElementById("g_body");
const overlay2 = document.getElementById("g_head");
const overlay3 = document.getElementById("g_pickguard");


var el1 = document.getElementsByClassName("color1");
for (var i = 0; i < el1.length; i++) {
    el1[i].onclick = changeColor1;
}
var el2 = document.getElementsByClassName("color2");
for (var i = 0; i < el2.length; i++) {
    el2[i].onclick = changeColor2;
}
var el3 = document.getElementsByClassName("color3");
for (var i = 0; i < el3.length; i++) {
    el3[i].onclick = changeColor3;
}

function changeColor1(e) {
    let hex = e.target.getAttribute("data-hex");
    overlay1.style.fill = hex;
    overlay1.style.opacity = 1;
    for(var i = 0; i < el1.length; i++) {
        if(el1[i] === e.target) {
            el1[i].style.border = "5px solid #0f0";
        }
        else {
            el1[i].style.border = "2px solid #aaa";
        }
    }
}

function changeColor2(e) {
    let hex = e.target.getAttribute("data-hex");
    overlay2.style.fill = hex;
    overlay2.style.opacity = 1;
    for (var i = 0; i < el2.length; i++) {
        if (el2[i] === e.target) {
            el2[i].style.border = "5px solid #0f0";
        }
        else {
            el2[i].style.border = "2px solid #aaa";
        }
    }
}

function changeColor3(e) {
    let hex = e.target.getAttribute("data-hex");
    overlay3.style.fill = hex;
    overlay3.style.opacity = 1;
    for (var i = 0; i < el3.length; i++) {
        if (el3[i] === e.target) {
            el3[i].style.border = "5px solid #0f0";
        }
        else {
            el3[i].style.border = "2px solid #aaa";
        }
    }
}

var resetBtn1 = document.getElementById("reset-btn1");
resetBtn1.onclick = resetColor1;
var resetBtn2 = document.getElementById("reset-btn2");
resetBtn2.onclick = resetColor2;
var resetBtn3 = document.getElementById("reset-btn3");
resetBtn3.onclick = resetColor3;

function resetColor1() {
    overlay1.style.opacity = 0;
    resetBtn1.style.border = "5px solid #0f0";
    for (var i = 1; i < el1.length; i++) {
            el1[i].style.border = "2px solid #aaa";
    }
}

function resetColor2() {
    overlay2.style.opacity = 0;
    resetBtn2.style.border = "5px solid #0f0";
    for (var i = 1; i < el2.length; i++) {
        el2[i].style.border = "2px solid #aaa";
    }
}

function resetColor3() {
    overlay3.style.opacity = 0;
    resetBtn3.style.border = "5px solid #0f0";
    for (var i = 1; i < el3.length; i++) {
        el3[i].style.border = "2px solid #aaa";
    }
}