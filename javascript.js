function getComputerChoice() {
    rand = Math.floor(Math.random() * 3);
    
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