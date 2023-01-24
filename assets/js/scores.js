const highScoresList = document.querySelector("#highscores");
const clearBtn = document.querySelector("#clear");
let storedScores = [];


function showHighScores() {

    let storedScores = JSON.parse(localStorage.getItem("previousScores"))
    // Event Listener to Sort Recalled Data
    storedScores.sort((a, b) => {
        return b.score - a.score
    })
    // Creating New list element for each recalled score
    storedScores.forEach((element) => {
        let newLi = document.createElement('li')
        newLi.textContent = element.initials + ": " + element.score;
        highScoresList.appendChild(newLi)
    })
}

// Event Listener to Clear high scores List
clearBtn.addEventListener("click", function () {
    localStorage.clear()
    highScoresList.remove()
})

showHighScores()


