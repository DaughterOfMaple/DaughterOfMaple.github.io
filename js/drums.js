// Toggle key visibility
var toggleBtn = $(".toggle-keys");
var keys = $(".key");

toggleBtn.click(function() {
  if (toggleBtn.text() === "Show Keys") {
    toggleBtn.text("Hide Keys");
    keys.show();
  } else {
    toggleBtn.text("Show Keys");
    keys.hide();
  }
});

// Detect clicks
$(".drum").click(function(event) {
  makeSound(event.target.textContent);
  buttonAnimation(event.target.textContent);
});

// Detect keys
$(document).keydown(function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crashCymbal = new Audio("sounds/crash.mp3");
      crashCymbal.play();
      break;
    case "a":
      var highHat = new Audio("sounds/high-hat.wav");
      highHat.play();
      break;
    case "s":
      var highTom = new Audio('sounds/hi-tom.wav');
      highTom.play();
      break;
    case "d":
      var medTom = new Audio('sounds/mid-tom.wav');
      medTom.play();
      break;
    case "i":
      var rideCymbal = new Audio('sounds/ride.wav');
      rideCymbal.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var bass = new Audio('sounds/bass.mp3');
      bass.play();
      break;
    case "l":
      var lowTom = new Audio('sounds/floor-tom.wav');
      lowTom.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = $(".drum." + currentKey);
  activeButton.addClass("pressed");

  setTimeout(function() {
    activeButton.removeClass("pressed");
  }, 100);
}
