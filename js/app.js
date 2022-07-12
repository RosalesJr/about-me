'use strict';

let siteGuest = prompt('What is your name?');
alert(`Hello ${siteGuest} welcome to my page!`);

let userGuess = prompt('Yes or No? I have black hair.').toLowerCase();
if(userGuess === 'y' || userGuess === 'yes'){
  alert('YES I DO!');
}else if(userGuess === 'n' || userGuess === 'no'){
  alert('SORRY YES I DO!');
}else{
  alert('Please play the game');
}

let userGuess2 = prompt('Yes or No? I have brown eyes.').toLowerCase();
if(userGuess2 === 'y' || userGuess2 === 'yes'){
  alert('YES THEY ARE!');
}else if(userGuess2 === 'n' || userGuess2 === 'no'){
  alert('SORRY MY EYES ARE BROWN!');
}else{
  alert('PLEASE play the game');
}

let userGuess3 = prompt('Yes or No? I am serving in the US Army.').toLowerCase();
if(userGuess3 === 'y' || userGuess3 === 'yes'){
  alert('YES I AM!');
}else if(userGuess3 === 'n' || userGuess3 === 'no'){
  alert('SORRY YES I AM!');
}else{
  alert('PLEASE PLAY the game');
}

let userGuess4 = prompt('Yes or No? I am a mechanic.').toLowerCase();
if(userGuess4 === 'y' || userGuess4 === 'yes'){
  alert('SURE AM!');
}else if(userGuess4 === 'n' || userGuess4 === 'no'){
  alert('SORRY! I AM!');
}else{
  alert('PLEASE PLAY THE GAME');
}

let userGuess5 = prompt('Yes or No? Pasta is my favorite food.').toLowerCase();
if(userGuess5 === 'y' || userGuess5 === 'yes'){
  alert(`YES IT IS ${siteGuest}!`);
}else if(userGuess5 === 'n' || userGuess5 === 'no'){
  alert(`SORRY YES IT IS ${siteGuest}!`);
}else{
  alert(`OK GAME OVER ${siteGuest}!`);
}