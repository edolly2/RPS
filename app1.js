function getUserChoice() {
    let userInput = prompt("choice")
    userInput.toLowerCase();
    switch (userInput) {
        case 'rock':
            return userInput;
            break;
        case 'paper':
            return userInput;
            break;
        case 'scissors':
            return userInput;
            break;
        default:
            'ERROR!';
            return 'ERROR!';
            break;
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            'ERROR!'
            return 'ERROR!'
            break;

    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie Game!';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {

        return 'PC WON!';

    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'PC WON!';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'PC WINS!';
    } else {
        return 'HUMAN WINS!';
    }
}

function playGame() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));

}
playGame();