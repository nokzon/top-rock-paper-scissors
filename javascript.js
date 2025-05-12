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

// add event listeners
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");

// div to display result
var div = document.querySelector("div");

function playGame(computerChoice) {
    humanScore = 0;
    computerScore = 0;

    rock.addEventListener("click", function (e) {
        switch (computerChoice) {
            case "rock":
                div.textContent = "Computer chooses rock. Rock and rock does... nothing! It's a tie!";
                break;
            case "paper":
                computerScore++;
                div.textContent = "Computer chooses paper. Paper eats rock. You lost :(";
                break;
            default: // computer choose scissors
                humanScore++;
                div.textContent = "Computer chooses scissors. Rock beats scissors. You win :)";   
        }    
    });
    paper.addEventListener("click", function (e) {
        switch (computerChoice) {
            case "rock":
                humanScore++;
                div.textContent = "Computer chooses rock. Paper eats rock. You win :)";
                break;
            case "paper":
                div.textContent = "Computer chooses paper. Paper and paper does... nothing. It's a tie.";
                break;
            default: // computer choose scissors
                computerScore++;
                div.textContent = "Computer chooses scissors. Scissors cuts paper. You lost :(";
        }  
    });
    scissors.addEventListener("click", function (e) {
        switch (computerChoice) {
            case "rock":
                computerScore++;
                div.textContent = "Computer chooses rock. Rock breaks scissors. You losk :(";
                break;
            case "paper":
                humanScore++;
                div.textContent = "Computer chooses paper. Scissors cuts paper. You win :)";
                break;
            default:
                div.textContent = "Computer chooses scissors. Scissors and scissors does... nothing. It's a tie.";
        }     
    });
}


let totalHumanScore = 0;
let totalComputerScore = 0;

const computerSelection = getComputerChoice();

playGame(computerSelection);

// tally score
if (humanScore == 1) {
    totalHumanScore++;
} else if (computerScore == 1) {
    totalComputerScore++;
}

console.log(`Human score: ${totalHumanScore}, Computer score: ${totalComputerScore}`);

// to determine the final winner
if (totalHumanScore > totalComputerScore) {
    console.log("You won the game!!");
} else if (totalHumanScore < totalComputerScore) {
    console.log("You lost the game...");
} else {
    console.log("No one wins the game. It's a tie.");
}