let computerSelection = "";
const choiceList = document.querySelector('.choice-list');
const winnerOverall = document.createElement('div');
const scores = document.createElement('div');
const selections = document.createElement('div');
const divResults = document.createElement('div');
const divContainer = document.querySelector('.container');
let computerScore = 0;
let playerScore = 0;

const resetButton = document.createElement('button');
resetButton.textContent = "Reset";
choiceList.appendChild(resetButton);
resetButton.disabled = true;
resetButton.addEventListener('click', () => {
    resetGame();
    buttons.forEach(button => button.disabled = false);
    resetButton.disabled = true;
});

let randomNumGen = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let getComputerChoice = () => {
    let choice = 0;
    const choiceArr = ["rock", "paper", "scissors"];
    return choice = choiceArr[randomNumGen(1, 4) - 1];
}

let compareChoices = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            divResults.textContent = "Tie, rock can't beat rock.";
            return winner = "none";
        } else if (computerSelection === "paper") {
            divResults.textContent = "You lose, paper beats rock.";
            return winner = "computer";
        } else {
            divResults.textContent = "You win, rock beats scissors.";
            return winner = "player";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            divResults.textContent = "You win, paper beats rock.";
            return winner = "player";
        } else if (computerSelection === "paper") {
            divResults.textContent = "Tie, paper can't beat paper.";
            return winner = "none";
        } else {
            divResults.textContent = "You lose, scissors beat paper.";
            return winner = "computer";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            divResults.textContent = "You win, scissors beat paper.";
            return winner = "player";
        } else if (computerSelection === "rock") {
            divResults.textContent = "You lose, rock beats scissors.";
            return winner = "computer";
        } else {
            divResults.textContent = "Tie, scissors can't beat scissors.";
            return winner = "none";
        }
    }
}

let playRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice();
    let winner = compareChoices(playerSelection, computerSelection);

    if (winner === "player") {
        playerScore++;
    }
    else if (winner === "computer") {
        computerScore++;
    }

    selections.textContent = `${playerSelection[0].toUpperCase() + playerSelection.slice(1)} vs ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`;
    scores.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    divContainer.appendChild(selections);
    divContainer.appendChild(divResults);
    divContainer.appendChild(scores);

    if (playerScore === 5 || computerScore === 5) {
        winnerOverall.textContent = "You win, I am the inferior being.";
        buttons.forEach(button => button.disabled = true);
        divContainer.appendChild(winnerOverall);
    }
}

let resetGame = () => {
    if (playerScore === 5 || computerScore === 5) {
        divContainer.removeChild(winnerOverall);
    }
    playerScore = 0;
    computerScore = 0;
    divContainer.removeChild(selections);
    divContainer.removeChild(divResults);
    divContainer.removeChild(scores);

}

const buttons = document.querySelectorAll('button.selection');
buttons.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.id;
    playRound(playerSelection, computerSelection);
    resetButton.disabled = false;
}));