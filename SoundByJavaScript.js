document.querySelectorAll('.drumBtns')[0].addEventListener('click', function () {
    var Drum = new Audio('sounds/DrumsAccent.mp3');
    Drum.play();
    console.log(this);
    this.style.color = 'white';
    
})

document.querySelectorAll(".drumBtns")[1].addEventListener('click', function () {
    var Bass = new Audio('sounds/BassDrum.wav');
    Bass.play();
    console.log(this);
})

document.querySelectorAll(".drumBtns")[2].addEventListener('click', function () {
    var DrumJokeAccent = new Audio('sounds/DrumJokeAccent.wav');
    DrumJokeAccent.play();
    console.log(this);
})

document.querySelectorAll(".drumBtns")[3].addEventListener('click', function () {
    var GuitarStroke = new Audio('sounds/GuitarStroke.wav');
    GuitarStroke.play();
    console.log(this);
})

document.querySelectorAll(".drumBtns")[4].addEventListener('click', function () {
    var BassRumble = new Audio('sounds/BassRumble.wav');
    BassRumble.play();
    console.log(this);
})