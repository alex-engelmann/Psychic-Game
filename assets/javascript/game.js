//Set up all the needed variables

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var currentGuesses = "";

//Write an algorithm that generates a random letter

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = alphabet[Math.floor(Math.random() * (alphabet.length -1))];

//Compare the user's input to the random letter
//and update variables accordingly

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    if (userGuess === randomLetter) {
        currentGuesses += userGuess + ",";
        wins++;
        guessesLeft = 5;
        currentGuesses = "";
    }
    else if (guessesLeft === 1){
        currentGuesses += userGuess + ",";
        guessesLeft = 5;
        losses++;
        currentGuesses = "";
    }
    else {
        guessesLeft--;
        currentGuesses += userGuess + ",";
    }
    console.log("CPU letter: " + randomLetter);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses Left: " + guessesLeft);
    console.log("Guesses so far: " + currentGuesses);
}