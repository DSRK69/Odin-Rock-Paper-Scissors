// Number of rounds
let roundNum = +prompt("Enter number of rounds: ");

let computerChoice;

// Game score
let gameScore = 0;

// Play entire game and print score
console.log(playFullGame());
console.log(gameScore);


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
        // If correspondant compare both choices
        if (playerSelection == computerSelection) {
            console.log("It's a tie");
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            console.log("You loose");
            gameScore -= 1;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            console.log("You loose");
            gameScore -= 1;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            console.log("You loose");
            gameScore -= 1;
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            console.log("You win");
            gameScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("You win");
            gameScore += 1;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log("You win");
            gameScore += 1;
        }
    } else {
        console.log("Please choose one of the options");
    }
}

function playFullGame() {
    // Do a loop that plays a round until the number of rounds selected

    // Each round ask for an option from both contenders

    for (let i = 0; i < roundNum; i++) {
        // Get player's choice
        let playerChoice = prompt("Choose Rock, Paper or Scissors: ");
        playerChoice = playerChoice.toLowerCase();

        // Get computer's choice
        let computerChoice = getComputerChoice();

        console.log("Computer's choice: " + computerChoice);
        console.log("Player's choice: " + playerChoice);

        // Start the round function
        playGame(playerChoice, computerChoice);
    }
}