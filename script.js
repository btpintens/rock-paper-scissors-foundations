// console.log("Hello World");

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissor?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("it's a tie")
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) 
        {
        humanScore++;
        console.log("you win!")
        }
    else {
        computerScore++;
        console.log("you lose to the computer. boo")
    }
    console.log(`Score: Human ${humanScore} - Computer: ${computerScore}`);
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 5) {
        console.log("you win")
    } else {
        console.log("computer wins")
    }
}

playGame();