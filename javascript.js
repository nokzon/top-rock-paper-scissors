function getComputerChoice() {
    var rand = Math.floor(Math.random() * 3)

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

function checkwinner(humanScore, computerScore) {
    if (humanScore == 5) {
        alert("YOU WIN! 🕺🏻 \nPlay Again?");
        location.reload();
    } else if (computerScore == 5) {
        alert ("Computer wins... 🦦 \nPlay Again?");
        location.reload();
    }
};

function playGame() {
    rock.addEventListener("click", function (e) {
        switch (getComputerChoice()) {
            case "rock":
                displayResult.textContent = "Computer chooses rock. Rock and rock does... nothing! It's a tie!";
                break;
            case "paper":
                computerScore++;
                displayResult.textContent = "Computer chooses paper. Paper eats rock. You lost :(";
                break;
            default: // computer choose scissors
                humanScore++;
                displayResult.textContent = "Computer chooses scissors. Rock beats scissors. You win :)";   
        }   
        displayScores(); 
        checkwinner(humanScore, computerScore)
    });
    paper.addEventListener("click", function (e) {
        switch (getComputerChoice()) {
            case "rock":
                humanScore++;

                displayResult.textContent = "Computer chooses rock. Paper eats rock. You win :)";
                break;
            case "paper":
                displayResult.textContent = "Computer chooses paper. Paper and paper does... nothing. It's a tie.";
                break;
            default: // computer choose scissors
                computerScore++;
                displayResult.textContent = "Computer chooses scissors. Scissors cuts paper. You lost :(";
        } 
        displayScores();  
        checkwinner(humanScore, computerScore)
    });
    scissors.addEventListener("click", function (e) {
        switch (getComputerChoice()) {
            case "rock":
                computerScore++;
                displayResult.textContent = "Computer chooses rock. Rock breaks scissors. You losk :(";
                break;
            case "paper":
                humanScore++;
                displayResult.textContent = "Computer chooses paper. Scissors cuts paper. You win :)";
                break;
            default:
                displayResult.textContent = "Computer chooses scissors. Scissors and scissors does... nothing. It's a tie.";
        }
        displayScores();      
        checkwinner(humanScore, computerScore)
    });
};

function displayScores() {
    displayHumanScore.textContent = `Human Score: ${humanScore}`;
    displayComputerScore.textContent = `Computer Score: ${computerScore}`; 
};

var humanScore = 0;
var computerScore = 0;

var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");

var displayResult = document.querySelector("#displayResult");
var displayHumanScore = document.querySelector("#humanScore");
var displayComputerScore = document.querySelector("#computerScore");

displayScores();
playGame();
