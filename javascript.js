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
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            console.log("Error");
    }
}