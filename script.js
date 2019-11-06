var cssText = document.querySelector("h3");
var colorOne = document.getElementById("color1");
var colorTwo = document.getElementById("color2");
var body = document.getElementById("gradient");

var btnTop = document.getElementById("top");
var btnRight = document.getElementById("right");
var btnDown = document.getElementById("down");
var btnLeft = document.getElementById("left");

btnTop.addEventListener("click", topG);
btnRight.addEventListener("click", rightG);
btnDown.addEventListener("click", bottomG);
btnLeft.addEventListener("click", leftG);

colorOne.addEventListener("input", changeBg);
colorTwo.addEventListener("input", changeBg);

function changeBg(){
    var ValueOne = colorOne.value;
    var ValueTwo = colorTwo.value;
    var color = body.style.background = "linear-gradient(to right, " + ValueOne + ", " + ValueTwo + ")";
    cssText.textContent = color;
};

function topG(){
    var ValueOne = colorOne.value;
    var ValueTwo = colorTwo.value;
    var color = body.style.background = "linear-gradient(to top, " + ValueOne + ", " + ValueTwo + ")";
    cssText.textContent = color;
};

function rightG(){
    var ValueOne = colorOne.value;
    var ValueTwo = colorTwo.value;
    var color = body.style.background = "linear-gradient(to right, " + ValueOne + ", " + ValueTwo + ")";
    cssText.textContent = color;
};

function bottomG(){
    var ValueOne = colorOne.value;
    var ValueTwo = colorTwo.value;
    var color = body.style.background = "linear-gradient(to bottom, " + ValueOne + ", " + ValueTwo + ")";
    cssText.textContent = color;
};

function leftG(){
    var ValueOne = colorOne.value;
    var ValueTwo = colorTwo.value;
    var color = body.style.background = "linear-gradient(to left, " + ValueOne + ", " + ValueTwo + ")";
    cssText.textContent = color;
};