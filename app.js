/* ------ VAIRABLES ------ */
let userChoice = "";
let computerAnswer = "";
let p = 0;
let c = 0;
/* ----------------------- */
/* ------ GET COMPUTER CHOICE ------ */
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
    /* -------------------------------- */
    /* ------ GET HUMAN CHOICE ------ */
const userPlay = () => {
        userChoice = prompt("Rock, Paper, or Scissors? ");
        userChoice = userChoice.toLowerCase();
        return userChoice;
    }
    /* ----------------------------- */
    /* ------ DETERMINE WHO WINS ------ */
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
    /* --------------------------------*/
    /* ------ THE GAME ------ */
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
    /* -------------------*/
    /* ------ WHILE LOOP TO KEEP SCORE ------ */
while (p < 5 && c < 5) {
    playGame();
    console.log("Computer Score: ", c);
    console.log("Player Score: ", p);
}
/* ------------------------------------- */
/* ------ ENDS GAME WHEN X REACHES 5 WINS ------ */
if (p === 5 && c < 5) {
    console.log("Player Wins First To 5");
} else {
    console.log("Computer Wins First To 5");
}
/* --------------------------------------------- */