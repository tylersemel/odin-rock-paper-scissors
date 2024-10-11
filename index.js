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

function getHumanChoice() {
    let isValidChoice = false;
    let humanChoice = "";

    while (!isValidChoice) {
        humanChoice = prompt("Enter rock, paper, or scissors: ", "").toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            isValidChoice = true;
        }
        else {
            alert("Please enter a valid choice!");
        }
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    //first compare human choice to computer choice

    //if both answers are the same, it's a tie
    //so return 0, so neither score increases
    if (humanChoice === computerChoice) {
        console.log("It's a tie!", `${humanChoice} is the same as ${computerChoice}`);
        return 0;
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
    //return 1
    if (isComputerWinner) {
        console.log("You lose! ", `${computerChoice} beats ${humanChoice}`);
        return 1;
    }

    //otherwise human won and return -1
    console.log("You win!", `${humanChoice} beats ${computerChoice}`);
    return -1;
}

function playGame() {
    //declare starting scores
    let humanScore = 0;
    let computerScore = 0;

    //loop through 5 rounds of the game
    for (let i = 1; i <= 5; i++) {
        //find out who won this round -> 0 for tie, 1 for computer, -1 for human
        let roundWinner = playRound(getHumanChoice(), getComputerChoice());

        //increase scores
        if (roundWinner === 1) {
            computerScore++;
        }
        else if (roundWinner === -1) {
            humanScore++;
        }
    }

    //declare winner based on who had the higher score
    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game!");
    }
    else {
        console.log("The game was a tie!");
    }

    console.log(`The score was ${humanScore} to ${computerScore}`);
}

//start the game
playGame();