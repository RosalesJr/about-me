'use strict';
let userPoints = 0;
let userWelcome = prompt('Let\'s play a game each question right is one point')


let siteGuest = prompt('What is your name?');
alert(`Hello ${siteGuest} welcome to my page!`);

function questionOne() {
  let userGuess = prompt('Yes or No? I have black hair.').toLowerCase();
  if (userGuess === 'y' || userGuess === 'yes') {
    alert('YES I DO!');
    userPoints++;
  } else if (userGuess === 'n' || userGuess === 'no') {
    alert('SORRY YES I DO!');
  } else {
    alert('Please play the game');
  }
}
questionOne();

function questionTwo() {
  let userGuess2 = prompt('Yes or No? I have brown eyes.').toLowerCase();
  if (userGuess2 === 'y' || userGuess2 === 'yes') {
    alert('YES THEY ARE!');
    userPoints++;
  } else if (userGuess2 === 'n' || userGuess2 === 'no') {
    alert('SORRY MY EYES ARE BROWN!');
  } else {
    alert('PLEASE play the game');
  }
}
questionTwo();


function questionThree() {
  let userGuess3 = prompt('Yes or No? I am serving in the US Army.').toLowerCase();
  if (userGuess3 === 'y' || userGuess3 === 'yes') {
    alert('YES I AM!');
    userPoints++;
  } else if (userGuess3 === 'n' || userGuess3 === 'no') {
    alert('SORRY YES I AM!');
  } else {
    alert('PLEASE PLAY the game');
  }
}
questionThree();


function questionFour() {
  let userGuess4 = prompt('Yes or No? I am a mechanic.').toLowerCase();
  if (userGuess4 === 'y' || userGuess4 === 'yes') {
    alert('SURE AM!');
    userPoints++;
  } else if (userGuess4 === 'n' || userGuess4 === 'no') {
    alert('SORRY! I AM!');
  } else {
    alert('PLEASE PLAY THE GAME');
  }
}
questionFour();


function questionFive() {
  let userGuess5 = prompt('Yes or No? Pasta is my favorite food.').toLowerCase();
  if (userGuess5 === 'y' || userGuess5 === 'yes') {
    alert(`YES IT IS ${siteGuest}!`);
    userPoints++;
  } else if (userGuess5 === 'n' || userGuess5 === 'no') {
    alert(`SORRY YES IT IS ${siteGuest}!`);
  } else {
    alert(`OK GAME OVER ${siteGuest}!`);
  }
}
questionFive();


function questionSix() {
  let myGuess = 8;
  let numGuess = 4;
  let theAnswer = false;
  console.log('test');
  while (numGuess && !theAnswer) {
    let userGuess = prompt('Guess a number 1-10');
    numGuess--;
    if (parseInt(userGuess) === myGuess) {
      theAnswer = true;
      alert('you got it!');
      userPoints++;
    } if (userGuess > myGuess) {
      alert(`you are to high, remaining guesses is ${numGuess}`)
    } if (userGuess < myGuess) {
      alert(`you are too low, remaining guesses is ${numGuess}`)
    } if (numGuess === 0) {
      alert(`sorry ${numGuess} guesses it was 8`);
    }
  }
}
questionSix();


function questionSeven() {
  let myFav = ['pasta', 'burritos', 'tacos'];
  let numTime = 6;
  let answer = false;

  while (numTime && !answer) {
    let userGuess = prompt('what is my favorite food?');
    numTime--;
    for (let i = 0; i < myFav.length; i++) {
      if (userGuess === myFav[i]) {
        answer = true;
        alert('your right I love pasta tacos and burritos');
        userPoints++;
        break;
      }
      if (userGuess !== myFav) {
        console.log('try again');
      } if (numTime === 0) {
        alert('sorry no more guesses its pasta, tacos and burritos');
        break;
      }
    }
  }
}
questionSeven();


alert('you have ' + userPoints + ' points.');