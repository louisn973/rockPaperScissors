function getComputerChoice() {
    num = 10*Math.random(3);
    
    if (num<=3) {
        return "rock"
    }
    else if (num > 3 && num <=6) {
        return "paper"
    }
    else {
        return "scissors"
    }   
}

function getHumanChoice() {
    choice = prompt("To play the game write the word between : Rock, Paper, Scissors")
    choice = choice.toLowerCase()
    return choice;
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log("No one win")
    }
    else if ( humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win paper beats rock!");
        humanScore +=1;
    }
    else if ( humanChoice == "paper" && computerChoice =="scissors" ) {
        console.log("You loose scissors beats paper!");
        computerScore +=1;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win scissors beats paper !");
        humanScore+=1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You loose rock beats scisors!");
        computerScore +=1;
    } else if ( humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win rock beats scissors!");
        humanScore+=1;
    } else {
        console.log("You loose paper beats rock!");
        computerScore+=1;
    }

}

function playGame() {
    humanScore = 0;
    computerScore =0;


}









