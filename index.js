function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100);

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

function getHumanChoice() {
    let moveIsInvalid = true;
    while (moveIsInvalid) {
        let humanChoice = prompt("Enter a move: ", "");
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }
    }
}

console.log(getHumanChoice());