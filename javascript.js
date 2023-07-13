//get computer's choice
let getComputerChoice = () => {
    let randomNumGen = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let choice = 0;
    if (randomNumGen(1, 4) === 1) {
        choice = "rock";
    } else if (randomNumGen(1, 4) === 2) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice;
}
// compare playerSelection with computerSelection and return who wins
let playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            console.log("Tie, rock can't beat rock.");
            return winner = "none";
        } else if (computerSelection === "paper") {
            console.log("You lose, paper beats rock.");
            return winner = "computer";
        } else {
            console.log("You win, rock beats scissors.");
            return winner = "player";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            console.log("You win, paper beats rock.");
            return winner = "player";
        } else if (computerSelection === "paper") {
            console.log("Tie, paper can't beat paper.");
            return winner = "none";
        } else {
            console.log("You lose, scissors beat paper.");
            return winner = "computer";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            console.log("You win, scissors beat paper.");
            return winner = "player";
        } else if (computerSelection === "rock") {
            console.log("You lose, rock beats scissors.");
            return winner = "computer";
        } else {
            console.log("Tie, scissors can't beat scissors.");
            return winner = "none";
        }
    }
}
//log player + computer choices
let computerSelection = getComputerChoice();
let playerSelection = "SciSsoRs"
console.log(`player's choice: ${playerSelection.toLowerCase()}`);
console.log(`computer's choice: ${computerSelection}`);

playRound(playerSelection, computerSelection);



