"use strict"; // строгий режим

// alert("Hello world")
console.log("Hello world");

// По натисненню на кнопку з id="btnClick"
document.querySelector("#btnClick").onclick = function () {
    // Знайти елемент з id="output"
    let output = document.querySelector("#output");
    // .. поміняти його вміст
    output.innerHTML = "Hello, my name Hanna!";
    // .. і колір тексту
    output.style.color = "red";

}

document.querySelector("#btnDay").onclick = function () {
    let day = document.querySelector("#day");
    day.innerHTML = "Now: " + new Date().toLocaleString();
}