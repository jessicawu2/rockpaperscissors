// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = prompt("Do you choose rock, paper or scissors?");
        if (! userChoice) {
            document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
        } else {
            document.write("<p>Player 1:" + " " + userChoice + "</p>");
        }
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        document.write("<p>Computer:" + " " + computerChoice + "</p>");
        var compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                return "It's a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    return "You win!";
                } else {
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    return "You win!";
                } else {
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    return "You lose! Try again.";
                } else {
                    return "You win!";
                }
            }
        };

// DOCUMENT READY FUNCTION BELOW

