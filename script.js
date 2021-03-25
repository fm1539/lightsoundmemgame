//var pattern = [2, 2, 4, 3, 2, 1, 2, 4, 5, 8, 6, 8, 7, 4, 2, 7, 1]; **FOR INITIAL TASK OF SETTING FIXED PATTERN
var pattern = []; // here pattern is set to empty as global.
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var numMistakes = 0;

//CONSTANTS
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

function generateRandomPattern() {
  //THIS RANDOMIZES THE PATTERN ARRAY
  for (let i = 1; i < 15; i++) {
    var randNum = Math.round(Math.random() * i) + 1; //ADD 1 in order to remove any potential 0
    if (randNum > 9) {
      //if the random number goes past 8 then circle back to 1
      randNum -= randNum % 9;
    }
    pattern.push(randNum); //push the random number made into the already made pattern array
  }
  console.log(pattern);
}

function startGame() {
  progress = 0;
  numMistakes = 0; //added so that you lose after 3 mistakes, initially u lose after 1
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  generateRandomPattern();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  pattern = [];  //reset the pattern so that it is empty. It will get filled when the game starts again
  clueHoldTime = 1000;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 577,
  7: 614,
  8: 687,
  9: 416
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 20; //SPEED UP PATTERN PLAYING!

}

function loseGame() {
  stopGame();
  alert("Game over. You Lost");
  clueHoldTime = 1000 //RESET ORIGINAL SPEED
}

function winGame() {
  stopGame();
  alert("Game over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    if (progress == guessCounter) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress += 1;
        playClueSequence();
      }
    } else {
      guessCounter += 1;
    }
  } else {
    if (numMistakes == 2) {
      loseGame();
      clueHoldTime = 1000 //RESET TO ORIGINAL SPEED
    } else {
      numMistakes += 1;
      clueHoldTime += 10; //re-add the lost hold time so that it is fair for the user to catch up and not speed up even after making a mistake
      alert("You made a mistake. " + (3 - numMistakes) + " tries remaining");
      playClueSequence();
    }
  }
}
