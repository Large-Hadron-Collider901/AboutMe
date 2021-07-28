"use strict";

// Prompt the user for their name
function playGame() {
  let userName = prompt("Hello, before we get started, please enter your name!");
  // Return the user's name in a custom welcome greeting
  alert("Welcome, " + userName + "! Thanks for visiting my page!");
  alert("If you are ready to start the game press OK to proceed to the rules!");
  alert("I am going to ask you a variety of questions about myself, all you need to do is try your best to guess the correct answer by entering either 'yes' or 'no'. Press OK to begin!");
  // Ask the first question
  let petQuestion = prompt("Is it true that I own a pet cat? I'll give you a hint this time, I only have one pet!").toLowerCase();
  // Alert user to let them know if they are correct or not
  if (petQuestion === 'no'.toLowerCase()) {
    alert("Great job!! You are correct, I have a dog, not a cat.");
   }
  else {
    alert("Woops, incorrect answer!");
  }
  // Ask second question
  let contestQuestion = prompt("Is it true that I won first place in a bellyflop contest in the third grade?").toLowerCase();
  // Alert user to let them know if they are correct or not
  if (contestQuestion === 'yes'.toLowerCase()) {
    alert("Nice, your answer is correct. I even won a trophy for it!");
    
  }
  else {
    alert("Sorry, that's incorrect!");
  }
  // Ask third question 
  let gardenQuestion = prompt("Is it true that I like growing flowers in my garden?").toLowerCase();
  // Alert user to let them know if they are correct or not
  if (gardenQuestion === 'no'.toLowerCase()) {
    alert("Correct! I love flowers but I suck at growing them. However, I do grow herbs and veggies in my garden!");
  }
  else {
    alert("Nope! Your answer is incorrect");
  }
  // Ask fourth question
  let nameQuestion = prompt("Is it true that I was named after the Isle of Skye which is located in New Zealand?").toLowerCase();
  // Alert user to let them know if they are correct or not
  if (nameQuestion === 'no'.toLowerCase()) {
    alert("Wow, that is correct! Looks like you're too smart for my little tricks. I was named after the Isle of Skye but it is actually located in Scotland");
    
  }
  else {
    alert("Sorry you are incorrect on a technicality due to the fact that the Isle of Skye is in Scotland, not New Zealand! Gotcha!!");
  }
  // Ask last question
  let hometownQuestion = prompt("Is it true that I was born in LaCrosse, Wisconsin?").toLowerCase();
  // Alert the user to let them know if they are correct or not
  if (hometownQuestion === 'yes'.toLowerCase()) {
    alert("You are correct, it is indeed true! Cheesehead represent!!");
    
  }
  else {
    alert("That is incorrect, better luck next time!");
  }
  let myAge = "24";

  alert("Okay, let's see if you can guess my age! I'll give you 4 attempts. Select OK to give it a try");

  for (let x = 0; x < 4; x++) {

    let userGuess = prompt("How old am I?");


    if (userGuess > myAge) {

      alert("Incorrect!! that's too high!");

    }

    if (userGuess < myAge) {
      alert("That is incorrect, your number is too low!");
    }

    if (userGuess === "23") {
      alert("Sorry, that's incorrect....but you're VERY close!!");
    }
    if (userGuess === myAge) {
      alert("That is correct, great job!");
      break;
    }
  }

  alert("I am 24 years old");
}

