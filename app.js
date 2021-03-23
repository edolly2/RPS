const computerPlay = () => {
    let computerAnswer = Math.floor(Math.random() * 3);
    if (computerAnswer === 0) {
        return "rock";
    } else if (computerAnswer === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const userPlay = () => {
    let userChoice = prompt("Rock, Paper, or Scissors? ");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

const determineWinner = (player, cpu) => {
    player = userPlay();
    cpu = computerPlay();
    console.log("Computer chose: ", cpu);
    if (cpu === player) {
        return "Tie Game!";
    }
    if (player === "rock" && cpu !== "paper") {
        return "Player Wins!";
    } else if (player === "paper" && cpu !== "scissors") {
        return "Player wins!";
    } else if (player === "scissors" && cpu !== "rock") {
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}

const playGame = (winner) => {
    winner = determineWinner();
    return winner;

}


console.log(playGame());