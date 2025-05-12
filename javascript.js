function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    
    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Error");
    }
}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors? ")

    choice = choice.toLowerCase();

    switch (choice) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
        default:
            console.log("Error");
    }
}

function playGame(humanChoice, computerChoice) {
    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            switch (computerChoice) {
                case "rock":
                    return "Computer chooses rock. Rock and rock does... nothing! It's a tie!";
                    break;
                case "paper":
                    computerScore++;
                    return "Computer chooses paper. Paper eats rock. You lost :(";
                    break;
                default: // computer choose scissors
                    humanScore++;
                    return "Computer chooses scissors. Rock beats scissors. You win :)";
            }
        } else if (humanChoice == "paper") {
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    return "Computer chooses rock. Paper eats rock. You win :)";
                    break;
                case "paper":
                    return "Computer chooses paper. Paper and paper does... nothing. It's a tie.";
                    break;
                default: // computer choose scissors
                    computerScore++;
                    return "Computer chooses scissors. Scissors cuts paper. You lost :(";
            }
        } else { // human choose scissors
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    return "Computer chooses rock. Rock breaks scissors. You losk :(";
                    break;
                case "paper":
                    humanScore++;
                    return "Computer chooses paper. Scissors cuts paper. You win :)";
                    break;
                default:
                    return "Computer chooses scissors. Scissors and scissors does... nothing. It's a tie.";
            } 
        }
    }

    console.log(playRound(humanChoice, computerChoice));
}

let totalHumanScore = 0;
let totalComputerScore = 0;

function tallyScore (humanScore, computerScore) {
    if (humanScore == 1) {
        totalHumanScore++;
    } else if (computerScore == 1) {
        totalComputerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame(humanSelection, computerSelection);

tallyScore(humanScore, computerScore);

console.log(`Human score: ${totalHumanScore}, Computer score: ${totalComputerScore}`);

// to determine the final winner
if (totalHumanScore > totalComputerScore) {
    console.log("You won the game!!");
} else if (totalHumanScore < totalComputerScore) {
    console.log("You lost the game...");
} else {
    console.log("No one wins the game. It's a tie.");
}