// JavaScript "Phrase Guesser" Game
// The code tracks the user's guesses and comparing them to a predefined phrase. 

// The phrase to guess
const phrase = "hello world";
// User's current guess, represented by underscores for unguessed letters
let currentGuess = "_".repeat(phrase.length);

// Function to update the current guess
function updateGuess(letter) {
  let updatedGuess = "";
  for (let i = 0; i < phrase.length; i++) {
    if (phrase.charAt(i) === letter) {
      updatedGuess += letter;
    } else {
      updatedGuess += currentGuess.charAt(i);
    }
  }
  currentGuess = updatedGuess;
}

// Function to check if the game is won
function checkWin() {
  return currentGuess === phrase;
}

// Testing (i.e., simulate guessing letters)
updateGuess("e");
console.log(currentGuess); // Expected "_e___ _____"
updateGuess("o");
console.log(currentGuess); // Expected "_e__o _o___"

// Check if the game is won
if (checkWin()) {
  console.log("Congratulations, you won!");
} else {
  console.log("Keep guessing!");
}
