/* js for Dice game */
"use strict";

function getDie(){
  var P1die1 = document.getElementById("P1die1");
  var P1die2 = document.getElementById("P1die2");
  var P1die3 = document.getElementById("P1die3");
  var P2die1 = document.getElementById("P2die1");
  var P2die2 = document.getElementById("P2die2");
  var P2die3 = document.getElementById("P2die3");
  var P3die1 = document.getElementById("P3die1");
  var P3die2 = document.getElementById("P3die2");
  var P3die3 = document.getElementById("P3die3");
  var dieD1 = document.getElementById("dieD1");
  var dieD2 = document.getElementById("dieD2");
}

function getAllDie(){
  var P1die1 = document.getElementById("P1die1");
  var P1die2 = document.getElementById("P1die2");
  var P1die3 = document.getElementById("P1die3");
  var P1die4 = document.getElementById("P1die4");
  var P1die5 = document.getElementById("P1die5");
  var P2die1 = document.getElementById("P2die1");
  var P2die2 = document.getElementById("P2die2");
  var P2die3 = document.getElementById("P2die3");
  var P2die4 = document.getElementById("P2die4");
  var P2die5 = document.getElementById("P2die5");
  var P3die1 = document.getElementById("P3die1");
  var P3die2 = document.getElementById("P3die2");
  var P3die3 = document.getElementById("P3die3");
  var P3die4 = document.getElementById("P3die4");
  var P3die5 = document.getElementById("P3die5");
  var dieD1 = document.getElementById("dieD1");
  var dieD2 = document.getElementById("dieD2");
  var dieD3 = document.getElementById("dieD3");
  var dieD4 = document.getElementById("dieD4");
}

function getPlayerStatus() {
  var player1status = document.getElementById("player1status");
  var player2status = document.getElementById("player2status");
  var player3status = document.getElementById("player3status");
  var dealerstatus = document.getElementById("dealerstatus");
}

function rollDice(){
    getDie();
    getPlayerStatus();
    var p1d1 = Math.floor(Math.random() * 4) + 1;
    var p1d2 = Math.floor(Math.random() * 12) + 1;
    var p1d3 = Math.floor(Math.random() * 10) + 1;
    var p2d1 = Math.floor(Math.random() * 4) + 1;
    var p2d2 = Math.floor(Math.random() * 12) + 1;
    var p2d3 = Math.floor(Math.random() * 10) + 1;
    var p3d1 = Math.floor(Math.random() * 4) + 1;
    var p3d2 = Math.floor(Math.random() * 12) + 1;
    var p3d3 = Math.floor(Math.random() * 10) + 1;
    var dD1 = Math.floor(Math.random() * 20) + 1;
    var dD2 = Math.floor(Math.random() * 6) + 1;
    P1die1.innerHTML = p1d1;
    P1die2.innerHTML = p1d2;
    P1die3.innerHTML = p1d3;
    P2die1.innerHTML = p2d1;
    P2die2.innerHTML = p2d2;
    P2die3.innerHTML = p2d3;
    P3die1.innerHTML = p3d1;
    P3die2.innerHTML = p3d2;
    P3die3.innerHTML = p3d3;
    dieD1.innerHTML = dD1;
    dieD2.innerHTML = dD2;
    var player1Total = p1d1 + p1d2 + p1d3;
    var player2Total = p2d1 + p2d2 + p2d3;
    var player3Total = p3d1 + p3d2 + p3d3;
    var dealerTotal = dD1 + dD2;
    player1status.innerHTML = player1Total;
    player2status.innerHTML = "You rolled "+player2Total+".";
    player3status.innerHTML = "You rolled "+player3Total+".";
    dealerstatus.innerHTML = "Dealer rolled "+dealerTotal+".";
    return player1Total;
}

function p1Hit() {
    var P1die4 = document.getElementById("P1die4");
    var p1d4 = Math.floor(Math.random() * 8) + 1;
    P1die4.innerHTML = p1d4;
    var p1HitTotal = player1Total + p1d4;
    p1hitstatus.innerHTML = p1HitTotal;
}

function p2Hit() {
    var P2die4 = document.getElementById("P2die4");
    var p2d4 = Math.floor(Math.random() * 8) + 1;
    P2die4.innerHTML = p2d4;
    var player2Total = player2Total + p2d4;
    player2status.innerHTML = "You rolled "+player2Total+".";
}

function p3Hit() {
    var P3die4 = document.getElementById("P3die4");
    var p3d4 = Math.floor(Math.random() * 8) + 1;
    P3die4.innerHTML = p3d4;
    var player3Total = player1Total + p3d4;
    player3status.innerHTML = "You rolled "+player3Total+".";
}

function dealerHit() {
    var dieD3 = document.getElementById("dieD3");
    var dD3 = Math.floor(Math.random() * 8) + 1;
    dieD3.innerHTML = dD3;
    var player3Total = dealerTotal + dD3;
    player3status.innerHTML = "You rolled "+dealerTotal+".";
}
