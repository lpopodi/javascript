var player1HitCounter = 0;
function p1Hit() {
    player1HitCounter.value = ++i;
  if (player1HitCounter.value = 1) {
    var P1die4 = document.getElementById("P1die4");
    var p1d4 = Math.floor(Math.random() * 8) + 1;
    P1die4.innerHTML = p1d4;
    var player1Total = player1Total + p1d4;
    var player1status = document.getElementById("player1status");
    player1status.innerHTML = "You rolled "+player1Total+".";
  } else if (player1HitCounter.value = 2) {
    var P1die5 = document.getElementById("P1die5");
    var p1d5 = Math.floor(Math.random() * 6) + 1;
    P1die5.innerHTML = p1d5;
    var player1Total = player1Total + p1d5;
    player1status.innerHTML = "You rolled "+player1Total+".";
  } else {
    player1status.innerHTML = "You have no more Hits. your total is "+player1Total+".";
  }
}


function p1Hit() {
    var P1die4 = document.getElementById("P1die4");
    var p1d4 = Math.floor(Math.random() * 8) + 1;
    P1die4.innerHTML = p1d4;
    var player1Total = player1Total + p1d4;
    player1status.innerHTML = "You rolled "+player1Total+".";
}

function hitMeP1() {
    var P1die4 = document.getElementById("P1die4");
    var p1d4 = Math.floor(Math.random() * 8) + 1;
    P1die4.innerHTML = p1d4;
    var player1Total = p1d1 + p1d2 + p1d3 + p1d4;
    var player1status = document.getElementById("player1status");
    player1status.innerHTML = "You rolled "+player1Total+".";
}

function hitMeAgainP1() {
    var P1die5 = document.getElementById("P1die5");
    var p1d5 = Math.floor(Math.random() * 6) + 1;
    P1die5.innerHTML = p1d5;
    var player1Total = p1d1 + p1d2 + p1d3 + p1d4 + p1d5;
    player1status.innerHTML = "You rolled "+player1Total+".";
}

function hitMeP2() {
    var P2die4 = document.getElementById("P2die4");
    var p2d4 = Math.floor(Math.random() * 8) + 1;
    P2die4.innerHTML = p2d4;
    var player2Total = p2d1 + p2d2 + p2d3 + p2d4;
    player2status.innerHTML = "You rolled "+player2Total+".";
}

function hitMeAgainP2() {
    var P2die5 = document.getElementById("P2die5");
    var p2d5 = Math.floor(Math.random() * 6) + 1;
    P2die5.innerHTML = p2d5;
    var player2Total = p2d1 + p2d2 + p2d3 + p2d4 + p2d5;
    player2status.innerHTML = "You rolled "+player2Total+".";
}

function allPlayersStay() {
  var player1Total = p1d1 + p1d2 + p1d3 + p1d4 + p1d5;
  var player2Total = p2d1 + p2d2 + p2d3 + p1d4 + p1d5;
  var player3Total = p3d1 + p3d2 + p3d3 + p1d4 + p1d5;
  var dealerTotal = dD1 + dD2 + dD3 + dD4;
  if(player1Total > 21){
    player1status.innerHTML += " BUST!";
  } else if (player1Total === 21) {
    player1status.innerHTML += " Blackjack"
  } else if ((player1Total < 21) && (player1Total > player2Total) && (player1Total > player3Total) && (player1Total > dealerTotal)) {
    player1status.innerHTML += " You Win!"
  } else {
    player1status.innerHTML += " No luck this time, Try Again!"
  }
  if(player2Total > 21){
    player2status.innerHTML += " BUST!";
  } else if (player2Total === 21) {
    player2status.innerHTML += " Blackjack"
  } else if ((player2Total < 21) && (player2Total > player1Total) && (player2Total > player3Total) && (player2Total > dealerTotal)) {
    player2status.innerHTML += " You Win!"
  } else {
    player2status.innerHTML += " No luck this time, Try Again!"
  }
  if(player3Total > 21){
    player3status.innerHTML += " BUST!";
  } else if (player3Total === 21) {
    player3status.innerHTML += " Blackjack"
  } else if ((player3Total < 21) && (player3Total > player1Total) && (player3Total > player2Total) && (player3Total > dealerTotal)) {
    player3status.innerHTML += " You Win!"
  } else {
    player3status.innerHTML += " No luck this time, Try Again!"
  }
  if(dealerTotal > 21){
  dealerstatus.innerHTML += " BUST!";
} else if (dealerTotal === 21) {
    dealerstatus.innerHTML += " Blackjack"
  } else if ((dealerTotal < 21) && (dealerTotal > player1Total) && (dealerTotal > player2Total) && (dealerTotal > player3Total)) {
    dealerstatus.innerHTML += " Dealer Wins!"
  } else {
    dealerstatus.innerHTML += " Dealer Down!!"
  }
}
