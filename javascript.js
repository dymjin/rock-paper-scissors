let getComputerChoice = () => {
    let randomNumGen = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let choice = 0;
    if (randomNumGen(1, 4) === 1) {
        choice = "Rock";
    } else if (randomNumGen(1, 4) === 2) {
        choice = "Paper"
    } else {
        choice = "Scissor"
    }
    return choice;
}
console.log(getComputerChoice());