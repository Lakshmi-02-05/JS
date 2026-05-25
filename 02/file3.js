//Create a game where you start with any random game number.
// Ask the user to keep guessing the game number until the user enters correct value.

let gamenum = 34;
let usernum = prompt("Guess the number");
if (usernum !== gamenum){
    let guessagain = prompt("You gussed it wrong, try again")
    console.log()
}else{
    console.log("Congrats, You guessed it right");
    
}