$(".instructions-btn").click(function() {
  $("#modal").dialog({
    title: "How to Play",
    show: true,
    modal: true,
    show: {
      effect: "clip",
      duration: 400
    },
    hide: {
      effect: "fold",
      duration: 400
    }
  });
});

var buttonColours = ["red", "blue", "green", "yellow"];
var gameHasBegun = false;
var level = 0;
var numberOfClicks = 0;
var gamePattern = [];
var userClickedPattern = [];

$(document).keydown(function() {
  if (!gameHasBegun) {
    startOver();
    $(".level-title").text("Level " + level);
    gameHasBegun = !gameHasBegun;
    nextSequence();
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function(event) {
  if (gameHasBegun) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    checkAnswer(numberOfClicks++);
    playSound(userChosenColour);
    animatePress(userChosenColour);
  }
});

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] !== userClickedPattern[currentLevel]) {
    playSound("wrong");
    $("body").addClass("game-over");
    $(".level-title").text("GAME OVER, Press any key to RESTART");
    gameHasBegun = false;

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200)
  }

  if (currentLevel === level) {
    level++;
    $(".level-title").text("Level " + level);
    numberOfClicks = 0;
    userClickedPattern = [];
    setTimeout(nextSequence, 500);
  }
}

function startOver() {
  gameHasBegun = false;
  level = 0;
  numberOfClicks = 0;
  gamePattern = [];
  userClickedPattern = [];
}
