function playGame() {
  let name = prompt("Hello, before we get started, please enter your name!");

  alert("Welcome, " + name + "! Thanks for visiting my page!");
  alert("If you are ready to start the game press OK to proceed to the rules!");
  alert(
    "I am going to ask you a variety of questions about myself, all you need to do is try your best to guess the correct answer by entering either 'yes' or 'no'. Press OK to begin!"
  );

  let correctGuesses = 0;

  const questions = [
    "Do I have a pet cat?",
    "Do I like to grow flowers in my garden?",
    "Did I win first place in a belly flop contest in the third grade?",
    "Was I named after a place in New Zealand called The Isle of Skye?",
    "Was I born in LaCrosse Wisconsin?",
    "Lets see if you can guess my age! How old am I?",
    "Can you guess one of my favorite instruments?",
  ];

  for (let i = 0; i < questions.length; i++) {
    let guess = prompt(questions[i]).toLowerCase();
    if (i === 6) {
      const instruments = [
        "electric violin",
        "theremin",
        "xylophone",
        "upright bass",
        "electric guitar",
        "mandolin",
      ];

      let attempts = 6;
      while (attempts !== 0) {
        if (instruments.includes(guess)) {
          alert(
            `Correct!\nYou could've entered any instrument in this list:\n${instruments}`
          );
          correctGuesses++;
          attempts = 0;
        } else {
          attempts--;
          if (attempts === 0) {
            alert(
              `Sorry! It looks like you're out of attempts.\nAny of the following instruments would have been correct: ${instruments}`
            );
          } else {
            guess = prompt(
              `Sorry, that's not one of them. Please try again.\n${questions[i]}\nAttempts left: ${attempts}`
            );
          }
        }
      }
    } else if (i === 5) {
      let myAge = "24";
      let attempts = 4;
      while (attempts !== 0) {
        if (guess === myAge) {
          alert("Correct!");
          correctGuesses++;
          attempts = 0;
        } else {
          attempts--;
          if (attempts === 0) {
            alert(
              `Uh-oh! Looks like you're out of attempts. Im sorry, the correct answer is ${myAge}.`
            );
          } else if (guess > myAge) {
            guess = prompt(
              `Incorrect, that number is too high. Please try again.\n${questions[i]}\nAttempts left: ${attempts}`
            );
          } else {
            guess = prompt(
              `Incorrect,, that number is too low. Please try again.\n${questions[i]}\nAttempts left: ${attempts}`
            );
          }
        }
      }
    } else if (i === 2 || i === 4) {
      if (guess === "yes") {
        alert("Correct!");
        correctGuesses++;
      } else {
        alert("Incorrect!");
      }
    } else {
      if (guess === "no") {
        alert("Correct!");
        correctGuesses++;
      } else {
        alert("Incorrect!");
      }
    }
  }

  alert(
    `Thanks for taking time to play my game today, ${
      name[0].toUpperCase() + name.substring(1).toLowerCase()
    }! I hope you had fun and learned a little bit about me. Your score is ${correctGuesses} out of 7.`
  );
}

let button = document.querySelector("button");
button.addEventListener("click", quiz);
