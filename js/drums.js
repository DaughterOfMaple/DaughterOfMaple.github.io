// Toggle key visibility
var toggleBtn = document.querySelector('.toggle-keys');
var keys = document.querySelectorAll('.key');

toggleBtn.addEventListener('click', function() {
  if (toggleBtn.innerHTML === "Show Keys") {
    toggleBtn.innerHTML = "Hide Keys"
    for (var i = 0; i < keys.length; i++) {
      keys[i].style.visibility = "visible";
    }
  } else {
    toggleBtn.innerHTML = "Show Keys"
    for (var i = 0; i < keys.length; i++) {
      keys[i].style.visibility = "hidden";
    }
  }
});

// Detect clicks
var drumButtons = document.querySelectorAll('.drum');

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener('click', function() {
    makeSound(this.innerHTML);
    console.log(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Detect keys
document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  console.log(event.key);
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
  var activeButton = document.querySelector(".drum." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
