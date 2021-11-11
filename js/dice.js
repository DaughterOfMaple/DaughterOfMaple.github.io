var score1 = 0;
var score2 = 0;

function UpdateDice() {
  var randomNumber1 = Math.ceil(Math.random(6) * 6);
  var newImage1 = "images/die" + randomNumber1 + ".png"
  document.querySelector(".die1").setAttribute("src", newImage1)

  var randomNumber2 = Math.ceil(Math.random(6) * 6);
  var newImage2 = "images/die" + randomNumber2 + ".png"
  document.querySelector(".die2").setAttribute("src", newImage2)

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".outcome").textContent = "👑 Player 1 wins!!";
    score1++;
  }
  if (randomNumber2 > randomNumber1) {
    document.querySelector(".outcome").textContent = "Player 2 wins!! 👑";
    score2++;
  }
  if (randomNumber1 === randomNumber2) {
    document.querySelector(".outcome").textContent = "🌈 It's a tie!! 🌈";
    score1++;
    score2++;
  }

  document.querySelector(".score").textContent = score1 + " - " + score2;
}

function ResetScore() {
  score1 = 0;
  score2 = 0;
  document.querySelector(".score").textContent = score1 + " - " + score2;
  document.querySelector(".outcome").textContent = "Let's play!";
}
