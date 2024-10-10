let humanScore = 0;
let computerScore = 0;

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
        let humanChoice = prompt("Enter rock, paper, or scissors: ", "").toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }
    }
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    //first compare human choice to computer choice

    //if both answers are the same, it's a tie
    if (humanChoice === computerChoice) {
        console.log("It's a tie!", `${humanChoice} is the same as ${computerChoice}`);
        return;
    }

    let isComputerWinner = false;

    //now can check who is the winner
    switch (computerChoice) {
        case "rock":
            if (humanChoice === "scissors") {
                isComputerWinner = true;
            }
            break;
        case "scissors":
            if (humanChoice === "paper") {
                isComputerWinner = true;
            }
            break;
        case "paper":
            if (humanChoice === "rock") {
                isComputerWinner = true;
            }
            break;
    }

    //if any of the above conditions where met, then the computer won
    if (isComputerWinner) {
        console.log("You lose! ", `${computerChoice} beats ${humanChoice}`);
        computerScore++;
        return;
    }

    //otherwise human won
    console.log("You win!", `${humanChoice} beats ${computerChoice}`);
    humanScore++;
}

const computerSelection = getComputerChoice();
console.log("Computer: ", computerSelection);

const humanSelection = getHumanChoice();


playRound(humanSelection, computerSelection);