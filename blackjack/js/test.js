/* js for Dice game */
"use strict";

var players = [player1, player2, player3, dealer];
var diceSides = [4, 6, 8, 10, 12, 20];
var playerDice = [die1, die2, die3, die4, die5];
var randomDice = myArray[Math.floor(Math.random() * diceSides.length)];
var playersDieTotal = d1 + d2 + d3 + d4 + d5;

function playerBoard () {
	var die1 = document.getElementById("die1");
	var die2 = document.getElementById("die2");
	var die3 = document.getElementById("die3");
	var die4 = document.getElementById("die4");
	var die5 = document.getElementById("die5");
	die1.innerHTML = d1;
	die2.innerHTML = d2;
	die3.innerHTML = d3;
	die4.innerHTML = d4;
	die5.innerHTML = d5;
	var d1 = Math.floor(Math.random() * randomDice) + 1;
	var d2 = Math.floor(Math.random() * randomDice) + 1;
	var d3 = Math.floor(Math.random() * randomDice) + 1;
	var d4 = Math.floor(Math.random() * randomDice) + 1;
	var d5 = Math.floor(Math.random() * randomDice) + 1;
}

function rollDice(){
    var status = document.getElementById("status");
}

function hitMe () {

}

function compareResults () {
	var diceTotal = d1 + d2 + d3 + d4 + d5;
	var dealerTotal = dD1 + dD2;
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
