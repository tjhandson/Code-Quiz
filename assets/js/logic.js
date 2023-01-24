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
let questionIndex = 0;
let buttonsArray = [];
let ContainerArray = [];
let totalNoQuestions = questions.length;
let previousScores = [];

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
        if (timerCount <= 0 || (questionIndex > totalNoQuestions - 1)) {
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

// functionn on displaying Question Page
function quesitonPage() {
    // Hide all elements for beginning game play
    hideElement(questionScreen);
    hideElement(endScreen);
    hideElement(startScreen);
    // Creating button Elements for each question
    for (let i = 0; i < 4; i++) {
        let parent = document.createElement("div");
        let child = document.createElement("button");
        child.setAttribute("data-index", i);
        child.setAttribute("class", "btn btn-primary rounded-pill mb-2");
        buttonsArray.push(child);
        ContainerArray.push(parent);
    }
    // end of game if questions completed
    if (questionIndex > totalNoQuestions - 1) {
        finalScore.textContent = correct;
        displayElement(endScreen);
        return;
    }
    else {
        // Else display each choice in their own button
        displayElement(questionScreen);
        correctAnswer = questions[questionIndex].answer;
        questionTitle.innerHTML = questions[questionIndex].title;
        for (let a = 0; a < 4; a++) {
            let index = buttonsArray[a].getAttribute("data-index");
            buttonsArray[a].textContent = (+index + 1) + ": " + questions[questionIndex].choices[index];
            ContainerArray[a].appendChild(buttonsArray[a]);
            questionChoices.appendChild(ContainerArray[a]);
        }
    }
    // display Question screen to begin questions
    displayElement(questionScreen);
}

// Button Functionality and Win counts and penalties
questionChoices.addEventListener("click", function (event) {
    var element = event.target;
    var userAnswer = element.textContent;
    var userOption = userAnswer.substring(3, userAnswer.length);

    // Sound and Count on correct answer selected 
    if (userOption === correctAnswer) {
        correctSound.play();
        correct++;
    }
    // Sound and time deduction on Incorrect answer selected
    else {
        timerCount -= 10;
        incorrectSound.play();
        return;
    }
    questionIndex++;
    quesitonPage();
});


// Start Game Sequence
function startGame() {
    startButton.disabled = true;
    timerCount = 60;
    startTimer();
    quesitonPage()
}

// Function to store Highscores to be recalled on highscore.html
function storeScores() {
    // Object container for Current Highscore
    let User = {
        initials: initials.value.trim(),
        score: correct,
    }

    // reset initial value
    initials.value = "";


    let tempRecall = [];
    // Parse localstorage back to aray of objects
    tempRecall = JSON.parse(localStorage.getItem('previousScores')) || [];
    // Push the new data into the array
    tempRecall.push(User);
    //TempRecall array converted to string and stored in localStorage
    localStorage.setItem('previousScores', JSON.stringify(tempRecall));

    hideElement(endScreen);
    displayElement(startScreen);
    startButton.disabled = false;

}

// Event Lister to start Game
startButton.addEventListener("click", startGame);

// Event Listener to Store Score
submit.addEventListener("click", storeScores);


