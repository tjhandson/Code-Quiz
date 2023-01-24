const timeElement = document.querySelector("#time");
const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#end-screen");
const questionScreen = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choices");
const finalScore = document.querySelector("#final-score");

// Stating Variables Key

let timer;
let timerCount;
let score;
let correct = 0;


// Timer Starting Text
timeElement.textContent = "Ready!";

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

//Timer Function and shows question page 
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        if (timerCount <= 0) {
            // Clears interval and Ends Game if Time Runs out
            clearInterval(timer);
            displayElement(endScreen);
            hideElement(questionScreen);
        }
        else {
            timerCount--;
            timeElement.textContent = timerCount;
            finalScore.textContent = correct;
            if (timerCount <= 10) {
                timeElement.style.color = "#FF0000";
            }
        }
    }, 1000);
}

// Start Game Sequence
function startGame() {
    startButton.disabled = true;
    timerCount = 60;
    startTimer();


}



// Event Lister to start Game
startButton.addEventListener("click", startGame);


