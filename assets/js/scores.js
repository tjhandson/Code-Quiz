const highScoresList = document.querySelector("#highscores");
const clearBtn = document.querySelector("#clear");
let storedScores = [];


function init() {
    showHighScores()
    return;
}

function showHighScores() {


    let storedScores = JSON.parse(localStorage.getItem("previousScores"))


    storedScores.sort((a, b) => {
        return b.score - a.score
    })
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


init()

