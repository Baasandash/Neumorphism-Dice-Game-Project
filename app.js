//toglogchiin eeljiig hadgalah parameter if 0 player1, 1 player2
var activePlayer = 0;

//toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];
//Toglogch uuriin eeljindee tsugluulj bgaa onoo hadgalah huvisagch
var roundscore = 0;
//Shoonii buuh huvisagch 1-6 gsen utgiig ene huvisagchid sanamsarguigeer gargana
var dice = Math.floor(Math.random() * 6) + 1;

//Program is starting
//<div class="player-score" id="score-0">43</div>

window.document.querySelector("#score-0").textContent = "0";
window.document.querySelector("#score-1").textContent = "0";
window.document.querySelector("#current-0").textContent = "0";
window.document.querySelector("#current-1").textContent = "0";

/* <img src="dice-5.png" alt="Dice" class="dice"></img> */
document.querySelector(".dice").style.display = "none";
