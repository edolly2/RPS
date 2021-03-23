let userChoice = "";
let computerAnswer = "";
let p = 0;
let c = 0;


const computerPlay = () => {
    computerAnswer = Math.floor(Math.random() * 3);
    if (computerAnswer === 0) {
        return "rock";
    } else if (computerAnswer === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const userPlay = () => {
    userChoice = prompt("Rock, Paper, or Scissors? ");
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

    if (winner === "Player Wins!") {
        p++;
        console.log(winner);
        return winner;
    } else if (winner === "Computer Wins!") {
        c++;
        console.log(winner);
        return winner;
    } else {
        console.log("Tie Game!")
        return winner;
    }

}


while (p < 5 && c < 5) {
    playGame();
    console.log("Computer Score: ", c);
    console.log("Player Score: ", p);
}
if (p === 5 && c < 5) {
    console.log("Player Wins First To 5");
} else {
    console.log("Computer Wins First To 5");
}