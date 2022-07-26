// Player 1 dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Player 2 dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Check to see who won

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="✨ Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="✨ Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw!!!";
}

function reloader() {
  location.reload();
}

document.querySelector("button").addEventListener("click", reloader);
