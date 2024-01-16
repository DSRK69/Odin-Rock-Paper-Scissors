
const enterRoundNumber = document.querySelector('.enter-choice');
const btnRock = document.querySelector('.rock-button');
const btnPaper = document.querySelector('.paper-button');
const btnScissors = document.querySelector('.scissors-button');
const btnSelector = document.querySelector('.button-selector');
const choiceOutput = document.querySelector('.win-output');
const choices = document.querySelector('.computer-choice');
const winnerAnnounce = document.querySelector('.winner-announcer');
let playerChoice;

btnRock.addEventListener ('click', () => {
    playerChoice = 'rock';
    console.log(playerChoice);
    playFullGame();
    choices.textContent = gameScore;
    if (gameScore >= 5) {
        winnerAnnounce.textContent = "You are the Winner";
    } else if (gameScore <= -5) {
        winnerAnnounce.textContent = "The computer is the Winner";
    }
});

btnPaper.addEventListener ('click', () => {
    playerChoice = 'paper';
    console.log(playerChoice);
    playFullGame();
    choices.textContent = gameScore;
    if (gameScore >= 5) {
        winnerAnnounce.textContent = "You are the Winner";
    } else if (gameScore <= -5) {
        winnerAnnounce.textContent = "The computer is the Winner";
    }
});

btnScissors.addEventListener ('click', () => {
    playerChoice = 'scissors';
    console.log(playerChoice);
    playFullGame();
    choices.textContent = gameScore;
    if (gameScore >= 5) {
        winnerAnnounce.textContent = "You are the Winner";
    } else if (gameScore <= -5) {
        winnerAnnounce.textContent = "The computer is the Winner";
    }
});

let computerChoice;

// Game score
let gameScore = 0;

// Get computer choice
function getComputerChoice() {
    // Get a random number between 1 and 3
    let num = Math.floor(Math.random() * 3) + 1
    // Assign each number to a choice and make it the computer's choice
    if (num === 1) {
        computerChoice = "paper";
        return computerChoice;
    }   else if (num === 2) {
        computerChoice = "scissors";
        return computerChoice;
    } else {
        computerChoice = "rock";
        return computerChoice;
    }
}

function playGame (playerSelection, computerSelection) {
    // Check if the player selection is correspondant to the options
    if (playerSelection == "rock" || 
        playerSelection == "paper" || 
        playerSelection == "scissors" ) {
        // If correspondent compare both choices
        if (playerSelection == computerSelection) {
            choiceOutput.textContent = "It\'s a tie\n You chose " + playerSelection + " and the computer chose " + computerSelection;
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            choiceOutput.textContent = "You loose\n You chose " + playerSelection + " and the computer chose " + computerSelection;
            gameScore -= 1;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            choiceOutput.textContent = "You loose\n You chose " + playerSelection + " and the computer chose " + computerSelection;
            gameScore -= 1;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            choiceOutput.textContent = "You loose\n You chose " + playerSelection + " and the computer chose " + computerSelection;
            gameScore -= 1;
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            choiceOutput.textContent = "You win\n You chose " + playerSelection + " and the computer chose " + computerSelection;
            gameScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            choiceOutput.textContent = "You win\n You chose " + playerSelection + " and the computer chose " + computerSelection;
            gameScore += 1;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            choiceOutput.textContent = "You win\n You chose " + playerSelection + " and the computer chose " + computerSelection;
            gameScore += 1;
        }
    } else {
        console.log("Please choose one of the options");
    }
}

function playFullGame() {

        let computerChoice = getComputerChoice();

        console.log("Computer's choice: " + computerChoice);
        console.log("Player's choice: " + playerChoice);

        // Start the round function
        playGame(playerChoice, computerChoice);
}