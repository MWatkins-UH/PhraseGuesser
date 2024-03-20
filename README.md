# PhraseGuesser
This simple "Guess the Phrase" game is written in JavaScript and is designed to track user's guesses and compare them to a predefined phrase; this implementation includes intentional bugs. 

### Phrase Guesser Tasks

#### Task 1 - Resolve the bugs
* A. Spaces in Phrases Ignored: The initial setup does not account for spaces or special characters in the phrase. When creating currentGuess, spaces in phrase are replaced with underscores, making it impossible to correctly guess phrases with spaces.

* B. Incorrect Win Condition: The checkWin function compares currentGuess to phrase to determine if the game is won. However, currentGuess and phrase will never match exactly because spaces in phrase are not preserved in currentGuess.

* C. Case Sensitivity: The game does not handle case sensitivity. If the phrase contains uppercase letters, the game will not correctly recognise letters in a different case.

* D. No Handling of Repeated Guesses: The game does not track which letters have already been guessed, i.e., if a user guesses the same letter multiple times.


#### Task 2 – Improve the design
A. Change the design so that a random phrase is selected from a list of possible phrases.

B. Change the design so that the number of guesses is included in the game.

C. Change the design so that the game can be played in ‘real time’ by a user.

D. Change the design so a user can play again and/or quit at any time.

E. Consider how you could test your implementation. 
