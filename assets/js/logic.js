const timeElement = document.querySelector("#time");
const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#end-screen");
const questionScreen = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choices");
const finalScore = document.querySelector("#final-score");

// Sound Components
let soundOn = true;
const correctSound = new Audio('./assets/sfx/correct.wav');
const incorrectSound = new Audio('./assets/sfx/incorrect.wav')

// Hiding elements with predefined CSS value
function hideElement(element) {
    element.className = "hide";
}
// Removing hiden elements with predefined CSS value
function displayElement(element) {
    element.className =
        element.className.replace("hide", "start");
}