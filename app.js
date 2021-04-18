//toglogchiin eeljiig hadgalah parameter if 0 player1, 1 player2
var activePlayer = 0;
//toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];
//Toglogch uuriin eeljindee tsugluulj bgaa onoo hadgalah huvisagch
var roundscore = 0;
//Shoonii buuh huvisagch 1-6 gsen utgiig ene huvisagchid sanamsarguigeer gargana

//Program is starting
//<div class="player-score" id="score-0">43</div>
// window.document.getElementById("score-0").textContent = "0";
// window.document.getElementById("score-1").textContent = "0";
var score0 = window.document.getElementById("score-0");
var score1 = window.document.getElementById("score-1");
score0.textContent = "0";
score1.textContent = "0";
// document.querySelector("#current-0").textContent = "0";
// document.querySelector("#current-1").textContent = "0";

// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";

var cur0 = document.getElementById("current-0");
var cur1 = document.getElementById("current-1");
cur0.textContent = "0";
cur1.textContent = "0";
/* <img src="dice-5.png" alt="Dice" class="dice"></img> */
//document.querySelector(".dice").style.display = "none";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//New game button
document.querySelector(".btn-new").addEventListener("click", function () {
  activePlayer = 0;
  scores = [0, 0];
  roundscore = 0;
  score0.textContent = "0";
  score1.textContent = "0";
  cur0.textContent = "0";
  cur1.textContent = "0";
  diceDom.style.display = "none";
});

//Too avah button
document.querySelector(".btn-roll").addEventListener("click", shoogShid);

function shoogShid() {
  var diceToo = Math.floor(Math.random() * 6) + 1;
  //alert("Shoo buulaa : " + diceToo);
  diceDom.src = "dice-" + diceToo + ".png";
  diceDom.style.display = "block";
  roundscore = roundscore + diceToo;
  if (activePlayer === 0) {
    cur0.textContent = diceToo;
  } else {
    cur1.textContent = diceToo;
  }
}
//Hold Points
document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer] = scores[activePlayer] + roundscore;
  roundscore = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
    score0.textContent = scores[0];
  } else {
    activePlayer = 0;
    cur1.textContent = "0";
    score1.textContent = scores[1];
  }
});

//onoo shalgah
