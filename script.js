'use strict';
// const element = document.getElementsByTagName("p")
// const check = document.getElementsByClassName("h1class")

// console.log(check[0].innerHTML = "correct Number")

// document.getElementById("Score").innerHTML = "Guessing is complete" + " " + element[0].innerHTML

// let x = document.getElementsByClassName("h1class");

// const check = document.getElementsByTagName("p")
// const check2 = check[0].innerHTML = x[0].textContent
// console.log(check2);

// console.log(
//  document.getElementById("theId").style.color = "Yellow");

// **** The Logical Game function Challenge ******///

let secretNumber = Math.trunc(Math.random() * 19) + 1;
let Score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (Number) {
  document.querySelector('.number').style.width = Number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  //The secret Number build up

  const x = Number(document.querySelector('.guess').value);

  //condition is not true

  if (!x) {
    displayMessage('❌ ⚔ not a valid number');
  }
  //condition is true/////////
  else if (secretNumber === x) {
    displayMessage('🤘 Correct Number🙂🙂');
    document.querySelector('body').style.backgroundColor = '#34eb3a';
    displayNumber('30rem');
    displayNumber(secretNumber);

    if (Score > highScore) {
      highScore = Score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //condition is not true////
  else if (x !== secretNumber) {
    if (Score > 1) {
      displayMessage(x > secretNumber ? '📈 Too high!' : '📉 Too low!');
      Score--;
      displayScore(Score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

//restart Code functon initalise///

document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  secretNumber = Math.trunc(Math.random() * 19) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(20);
  displayNumber('15rem');
});




