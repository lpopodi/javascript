/* js for Dice game */
"use strict";
function getDie(){
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var die3 = document.getElementById("die3");
  var die4 = document.getElementById("die4");
  var die5 = document.getElementById("die5");
  var dieD1 = document.getElementById("dieD1");
  var dieD2 = document.getElementById("dieD2");
  var status = document.getElementById("status");
}
function getRandomDice(){
  var diceSides = [4, 6, 8, 10, 12, 20];
  var randomDice = diceSides[Math.floor(Math.random() * diceSides.length)];
  return randomDice;
}
function getDiceValue(){
  var dieRoll = 2;
  var d1 = Math.floor(Math.random() * getRandomDice()) + 1;
  var d2 = Math.floor(Math.random() * getRandomDice()) + 1;
  var d3 = Math.floor(Math.random() * getRandomDice()) + 1;
  var d4 = Math.floor(Math.random() * getRandomDice()) + 1;
  var d5 = Math.floor(Math.random() * getRandomDice()) + 1;
  var diceValues = [d1, d2, d3, d4, d5];
  return diceValues;
}
function rollDice(){
    getDie();
    var dice = getDiceValue();
    var diceTotal = dice[0] + dice[1] + dice[2] + dice[3] + dice[4];
    var dealerTotal = dice[0] + dice[1];
    die1.innerHTML = dice[0];
    die2.innerHTML = dice[1];
    die3.innerHTML = dice[2];
    die4.innerHTML = dice[3];
    die5.innerHTML = dice[4];
    dieD2.innerHTML = dice[0];
    dieD1.innerHTML = dice[1];
    status.innerHTML = "You rolled "+diceTotal+".";
    if(diceTotal > 21){
      status.innerHTML += " BUST!";
    } else if (diceTotal === 21) {
      status.innerHTML += " Blackjack"
    } else if ((diceTotal < 21) && (diceTotal > dealerTotal)) {
      status.innerHTML += " You Win!"
    } else {
      status.innerHTML += " No luck this time, Try Again!"
    }
}
