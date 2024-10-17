const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const resultsContainer = document.querySelector(".results-container");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //get a random number between 0 and 1, then convert to whole number
    let randomNum = Math.floor(Math.random() * 100);

    //if between 0 and 33 have computer choose rock
    //if between 33 and 66 choose paper
    //otherwise choose scissors
    if (randomNum <= Math.floor(100 / 3)) {
        return "rock";
    }
    else if (randomNum <= Math.floor(100 / 3) * 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let winner = "human";
    //first compare human choice to computer choice

    //if both answers are the same, it's a tie
    //so return 0, so neither score increases
    if (humanChoice === computerChoice) {
        displayRoundWinner("tie", humanChoice, computerChoice);
        return;
    }

    //now can check who is the winner
    switch (computerChoice) {
        case "rock":
            if (humanChoice === "scissors") {
                winner = "computer";
            }
            break;
        case "scissors":
            if (humanChoice === "paper") {
                winner = "computer";
            }
            break;
        case "paper":
            if (humanChoice === "rock") {
                winner = "computer";
            }
            break;
    }

    displayRoundWinner(winner, humanChoice, computerChoice);
    calculatePoints(winner);
    checkWinner();
}

function displayRoundWinner(winner, humanChoice, computerChoice) {
    let roundWinnerText = document.createElement("div");

    switch(winner) {
        case "computer":
            roundWinnerText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            break;
        case "human":
            roundWinnerText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            break;
        case "tie":
            roundWinnerText.textContent = `It's a tie! ${humanChoice} is the same as ${computerChoice}`;
            break;
    } 

    resultsContainer.appendChild(roundWinnerText);
}

function calculatePoints(winner) {
    switch(winner) {
        case "computer":
            computerScore++;
            break;
        case "human":
            humanScore++;
            break;
    }
}

function checkWinner() {
    let gameWinnerText = document.createElement("div");

    if (computerScore >= 5) {
        gameWinnerText.textContent = `You lost! The final score was ${computerScore} to ${humanScore}`;
    }
    else if (humanScore >= 5) {
        gameWinnerText.textContent = `You won! The final score was ${humanScore} to ${computerScore}`;
    }

    resultsContainer.appendChild(gameWinnerText);
}

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
