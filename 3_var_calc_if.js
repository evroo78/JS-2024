/*
Завдання 1
Написати програму, яка визначає, чи є введене число парним або непарним.
*/

// text = prompt("Input number: "); // можливий варіант введення даних
document.querySelector("#calculate1").onclick = function () {
    let input = document.querySelector("#num1");
    let text = input.value;
    // Number, ParseInt, ParseFloat
    n = Number(text);
    let result;
    if (n % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    document.querySelector("#answer1").innerHTML = "This Number is " + result;
};

/* 
Завдання 2
Написати програму, яка визначає, який сьогодні день тижня, і виводить відповідне повідомлення.
*/
document.querySelector("#calculate2").onclick = function () {
    let date = new Date();
    document.querySelector("#today2").innerHTML = date.toLocaleDateString();
    let weekNumber = date.getDay();
    let answer2 = document.querySelector("#answer2");
    let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let result2 = "is " + weeks[weekNumber];
    answer2.innerHTML = result2;
};

/*
Завдання 3
Написати програму, яка перевіряє, чи є введений рік високосним.
*/
let year_tag = document.querySelector("#year3");
year_tag.oninput = function () {
    let year = year_tag.value;
    let result3;
    let answer3 = document.querySelector("#answer3");
    if (!(year % 400)) {
        result3 = "is Leap year /400";
    } else {
        if (!(year % 4)) {
            if (!(year % 100)) {
                result3 = "isn't Leap year /4 /100";
            } else {
                result3 = "is Leap year /4";
            }
        }
        else {
            result3 = "isn't Leap year";
        }
    }
    answer3.innerHTML = result3;
}
