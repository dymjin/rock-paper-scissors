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
            div.textContent = "Tie, rock can't beat rock.";
            return winner = "none";
        } else if (computerSelection === "paper") {
            div.textContent = "You lose, paper beats rock.";
            return winner = "computer";
        } else {
            div.textContent = "You win, rock beats scissors.";
            return winner = "player";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            div.textContent = "You win, paper beats rock.";
            return winner = "player";
        } else if (computerSelection === "paper") {
            div.textContent = "Tie, paper can't beat paper.";
            return winner = "none";
        } else {
            div.textContent = "You lose, scissors beat paper.";
            return winner = "computer";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            div.textContent = "You win, scissors beat paper.";
            return winner = "player";
        } else if (computerSelection === "rock") {
            div.textContent = "You lose, rock beats scissors.";
            return winner = "computer";
        } else {
            div.textContent = "Tie, scissors can't beat scissors.";
            return winner = "none";
        }
    }
}
computerSelection = "";
const div = document.createElement('div');
const body = document.querySelector('body');

let playRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice();
    body.appendChild(div);
    return compareChoices(playerSelection, computerSelection);
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playerSelection = button.id))
buttons.forEach(button => button.addEventListener('click', () => playRound(playerSelection, computerSelection)));
