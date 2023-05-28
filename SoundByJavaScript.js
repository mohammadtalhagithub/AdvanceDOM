// long method
/*
document
  .querySelectorAll(".drumBtns")[0]
  .addEventListener("click", function () {
    var Drum = new Audio("sounds/DrumsAccent.mp3");
    Drum.play();
    console.log(this); // console log this element whenever this event is triggered.
    console.log(this.innerHTML); // console log it's innerHTML.
    this.style.color = "white";
  });

document
  .querySelectorAll(".drumBtns")[1]
  .addEventListener("click", function () {
    var Bass = new Audio("sounds/BassDrum.wav");
    Bass.play();
    console.log(this);
    this.style.color = "white";
  });

document
  .querySelectorAll(".drumBtns")[2]
  .addEventListener("click", function () {
    var DrumJokeAccent = new Audio("sounds/DrumJokeAccent.wav");
    DrumJokeAccent.play();
    console.log(this);
    this.style.color = "white";
  });

document
  .querySelectorAll(".drumBtns")[3]
  .addEventListener("click", function () {
    var GuitarStroke = new Audio("sounds/GuitarStroke.wav");
    GuitarStroke.play();
    console.log(this);
    this.style.color = "white";
  });

document
  .querySelectorAll(".drumBtns")[4]
  .addEventListener("click", function () {
    var BassRumble = new Audio("sounds/BassRumble.wav");
    BassRumble.play();
    console.log(this);
    this.style.color = "white";
  });
*/
// using loop and Switch Statements
// let NoOfBtns = document.querySelectorAll(".drumBtns").length;
let NoOfBtns = $(".drumBtns").length;

// loop statement to add EventListener to all element with a class of .drumBtns
for (let i = 0; i < NoOfBtns; i++) {
    $(".drumBtns")[i].addEventListener("click", function () {
        /**
         * @param btnInnerHTML variable to store innerHTML with html class of .drumBtns
         */
        var btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML); 
    });
}

// document.addEventListener("event", callback function () {....})

// keypress
document.addEventListener("keypress", function (event) {
  // alert('key was pressed...');
  // console.log(event);
  makeSound(event.key);
})

function makeSound(click_or_key) {

  switch (click_or_key) {
    case "d":
        var audio = new Audio("sounds/DrumsAccent.mp3");
        audio.play();
        break;

    case "b":
        var audio = new Audio("sounds/BassDrum.wav");
        audio.play();
        break;

    case "j":
        var audio = new Audio("sounds/DrumJokeAccent.wav");
        audio.play();
        break;

    case "g":
        var audio = new Audio("sounds/GuitarStroke.wav");
        audio.play();
        break;

    case "r":
        var audio = new Audio("sounds/BassRumble.wav");
        audio.play();
        break;

    default:
        alert("Method Not implemented for this button...")
        break;
}
}