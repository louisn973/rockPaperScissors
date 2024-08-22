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
    //teste the number
    //if number<3:
        //then rock
    //if number >=3 and <6
        //then scissors
    //else paper    
}
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
