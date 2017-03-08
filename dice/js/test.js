
var dice = [
	{die1: document.getElementById("die1"), d1: Math.floor(Math.random() * 4) + 1, die1.innerHTML: d1},
	{die2: document.getElementById("die2"), d1: Math.floor(Math.random() * 6) + 1, die2.innerHTML: d2},
	{die3: document.getElementById("die3"), d1: Math.floor(Math.random() * 8) + 1, die3.innerHTML: d3},
	{die4: document.getElementById("die4"), d1: Math.floor(Math.random() * 12) + 1, die4.innerHTML: d4},
	{die5: document.getElementById("die5"), d1: Math.floor(Math.random() * 6) + 1, die5.innerHTML: d5},
	{dieD1: document.getElementById("dieD1"), d1: Math.floor(Math.random() * 20) + 1, dieD1.innerHTML: dD1},
	{dieD2: document.getElementById("dieD2"), d1: Math.floor(Math.random() * 4) + 1, dieD2.innerHTML: dD2}
];

function rollDice(){
    var status = document.getElementById("status");
    var diceTotal = d1 + d2 + d3 + d4 + d5;
    var dealerTotal = dD1 + dD2;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(diceTotal > 21){
      status.innerHTML += " BUST!";
    } else if (diceTotal === 21) {
      status.innerHTML += " Blackjack"
    } else if ((diceTotal < 21) ++ (diceTotal > dealerTotal)) {
      status.innerHTML += " You Win!"
    } else {
      status.innerHTML += " No luck this time, Try Again!"
    }
}
