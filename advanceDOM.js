
document.querySelector("#btn-1").addEventListener("click", oneClick); // not oneClick();
document.querySelector("#btn-2").addEventListener("click", TwoClick);

function oneClick() {
    alert("One Clicked");
}
function TwoClick() {
    alert("Two Clicked");
}

// OR Anonymous function
// (Anonymous function should be directly used somewhere, but not defined separately like this.)
// function () {
//     alert("Two Clicked");
// }

document.querySelector(".Btns").addEventListener("click", function () {
    alert("Button Clicked");
});
// This ^ will only select first element with this class
// querySelector returns only the first element matching the selector.

// let NoOfBtns = document.querySelectorAll(".Btns").length;
// ^ querySelectorAll returns an array, so we have to specify the
// specific index of element.

function WhatToDo () {
        alert("One Clicked");    
}

for (let i = 0; i < NoOfBtns; i++) {
    document.querySelectorAll(".Btns")[i].addEventListener("click", WhatToDo);
};

// OR pass an anonymous function

for (let i = 0; i < NoOfBtns; i++) {
    document.querySelectorAll(".Btns")[i].addEventListener("click", function () {
        alert("Button Clicked");
    });
};

// OR While loop
let i = 0;
while (i < NoOfBtns) {
    document.querySelectorAll(".Btns")[i].addEventListener("click", function () {
        alert("Button Clicked");
    });
    i++;
}

// Higher Order functions & passing funcs as Arguments.
function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function calculate(num1, num2, operator) {
    return operator(num1, num2); // signature of func being passed as an argument is mandatory.
}


debugger;
calculate(3,4, multiply);

let NoOfBtns = document.querySelectorAll(".Btns").length;
for (let i = 0; i < NoOfBtns; i++) {
    document.querySelectorAll('.Btns')[i].addEventListener('click', function () {
        // alert('Hello, button with class ".Btns" is clicked.')
        // C:\Users\moham\Downloads\Music
        var audio = new Audio('sounds/DrumsAccent.mp3');
        audio.play();
    })

}




