function getComputerChoice() {
    num = 10*Math.random(3);
    
    if (num<=3) {
        return "Rock"
    }
    else if (num > 3 && num <=6) {
        return "Paper"
    }
    else {
        return "Scissors"
    }   
}

function getHumanChoice() {
    choice = prompt("To play the game write the word between : Rock, Paper, Scissors")
    choice = choice.toLowerCase()
    return choice;
    //chek if the word is correct
    //if correct return the word as value messages
}

console.log(getHumanChoice())