// let game = () => {
//     let computerScore = 0;
//     let playerScore = 0;
//     let round = 1;
//     console.log(`ROUND: ${round}`);
//     //log player + computer choices
//     console.log(`YOU chose: ${playerSelection.toLowerCase()}`);
//     console.log(`COMPUTER chose: ${computerSelection}`);
//     let winnerRound = playRound(playerSelection, computerSelection);

//     //determine who wins each round
//     if (winnerRound === "player") {
//         playerScore++;
//         round++;
//     }

//     else if (winnerRound === "computer") {
//         computerScore++;
//         round++;
//     }
//     else if (winnerRound === "none") {
//         round++;
//     }
//     else {
//         console.log("INVALID CHOICE ENTERED");
//         round++;
//     }
//     console.log(`PLAYER: ${playerScore}            COMPUTER: ${computerScore}`);
//     console.log(``);

//     // who wins overall
//     if (playerScore < computerScore) {
//         console.log(`COMPUTER WINS; SCORE: ${computerScore} / ${rounds}`);
//     } else if (playerScore > computerScore) {
//         console.log(`PLAYER WINS; SCORE: ${playerScore} / ${rounds}`);
//     } else if (playerScore === computerScore && playerScore !== 0 && computerScore !== 0) {
//         console.log("NOBODY WON; TIED");
//     } else {
//         console.log("NOBODY WON; INVALID CHOICES ENTERED");
//     }
// }


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
//compare playerSelection with computerSelection and return who wins
function compareChoices(playerSelection, computerSelection) {
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
let playRound = (playerSelection, computerSelection) => {
    return console.log(compareChoices(playerSelection, computerSelection));
}
computerSelection = getComputerChoice();
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playerSelection = button.id))
buttons.forEach(button => button.addEventListener('click', () => playRound(playerSelection, computerSelection)));
