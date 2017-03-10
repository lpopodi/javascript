/* js for Dice game */

function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 4) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 8) + 1;
    var d4 = Math.floor(Math.random() * 12) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2 + d3 + d4 + d5;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(diceTotal > 21){
      status.innerHTML += " BUST!";
    } else {
      status.innerHTML += " No luck this time, Try Again!"
    }
}
