function playGame() {
  let name = prompt("Hello, before we get started, please enter your name!");

   // Return the user's name in a custom welcome greeting
   alert("Welcome, " + name + "! Thanks for visiting my page!");
   alert("If you are ready to start the game press OK to proceed to the rules!");
   alert("I am going to ask you a variety of questions about myself, all you need to do is try your best to guess the correct answer by entering either 'yes' or 'no'. Press OK to begin!");

  // count how many questions the user answered correctly
  let correctGuesses = 0;

  // store questions in an array
  const questions = [ 'Do I have a pet cat?', 'Do I like to grow flowers in my garden?', 'Did I win first place in a belly flop contest in the third grade?', 'Was I named after a place in New Zealand called The Isle of Skye?', 'Was I born in LaCrosse Wisconsin?', 'Lets see if you can guess my age! How old am I?', 'Can you guess one of my favorite instruments?' ];

  for (let i = 0; i < questions.length; i++) {
    // normalize answers to easily verify input
    let guess = prompt(questions[i]).toLowerCase();
    if (i === 6) {
      const instruments = ['Electric Violin', 'Theremin', 'Xylophone', 'Upright Bass', 'Electric Guitar', 'Mandolin'];

      let attempts = 6;
      while (attempts !== 0) {
        // check if input matches any instruments in the array
        if (instruments.includes(guess)) {
          alert(`Correct!\nYou could've entered any instrument in this list:\n${instruments}`);
          correctGuesses++;
          attempts = 0;
        } else {
          attempts--;
          if (attempts === 0) {
            alert(`Sorry! It looks like you're out of attempts.\nAny of the following instruments would have been correct: ${instruments}`);
          } else {
            guess = prompt(`Sorry, that's not one of them. Please try again.\n${questions[i]}\nAttempts left: ${attempts}`);
          }
        }
      }
    }
    else if (i === 5) {
      // Guess my age
      let myAge = "24";
      let attempts = 4;
      while(attempts !== 0) {
        if (guess === myAge) {
          alert("Correct!");
          correctGuesses++;
          attempts = 0;
        } else {
          attempts--;
          if (attempts === 0) {
            alert(`Uh-oh! Looks like you're out of attempts. Im sorry, the correct answer is ${myAge}.`);
          } else if (guess > myAge) {
            guess = prompt(`Incorrect, that number is too high. Please try again.\n${questions[i]}\nAttempts left: ${attempts}`);
          } else {
            guess = prompt(`Incorrect,, that number is too low. Please try again.\n${questions[i]}\nAttempts left: ${attempts}`);
          }
        }
      }
    }
    // for questions 3 & 5, the correct answer is yes. compare to user input. if correct, increment correctGuesses by 1.
    else if (i === 2 || i === 4) {
      if (guess === 'yes') {
        alert("Correct!");
        correctGuesses++;
      } else {
        alert("Incorrect!");
      }
    } else {
      // for all other questions, the proper response is no. compare to user input. if correct, increment correctGuesses by 1.
      if (guess === 'no') {
        alert("Correct!");
        correctGuesses++;
      } else {
        alert("Incorrect!");
      }
    }
  }

  // Thank user for participation & tell user how many questions they answered correctly
  alert(`Thanks for taking time to play my game today, ${name[0].toUpperCase() + name.substring(1).toLowerCase()}! I hope you had fun and learned a little bit about me. Your score is ${correctGuesses} out of 7.`);

}

// call quiz function when button is clicked
let button = document.querySelector('button');
button.addEventListener('click', quiz);