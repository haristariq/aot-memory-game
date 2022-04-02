// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var volume = 0.7;  //must be between 0.0 and 1.0
var mistakes = 0;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    mistakes = 0;
  
  for (let i = 0; i < 6; i++) {
    pattern.push(randomSeq(5));
  }
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence()
}

function stopGame(){
    //initialize game variables
    gamePlaying = false;
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520.0
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playSound(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime -= 10;
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. the Dub, Yessir!.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  var leng = pattern.length - 1;
  var checker = pattern[guessCounter];
  if(checker == btn){
    if(guessCounter == progress){
      if(progress == leng){
        winGame();
      }else{
        progress += 1;
        playClueSequence();
      }
    }else{
      guessCounter += 1;
    }
  } else if (checker != btn && mistakes < 2) {
    mistakes += 1;
  }else{
    loseGame();
  }
}

function randomSeq(arr) {
  return Math.floor(Math.random() * Math.floor(arr) + 1);
}

function playSound(btn, len) {
  switch (btn) {
    case 1:
      document.getElementById("levi").play();
      setTimeout(function () {
        stopTone();
      }, len);
      break;

    case 2:
      document.getElementById("armin").play();
      tonePlaying = true;
      setTimeout(function () {
        stopTone();
      }, len);
      break;

    case 3:
      document.getElementById("hange").play();
      tonePlaying = true;
      setTimeout(function () {
        stopTone();
      }, len);
      break;

    case 4:
      document.getElementById("eren").play();
      tonePlaying = true;
      setTimeout(function () {
        stopTone();
      }, len);
      break;

    case 5:
      document.getElementById("mikasa").play();
      tonePlaying = true;
      setTimeout(function () {
        stopTone();
      }, len);
      break;
  }
}

function startSound(btn) {
  switch (btn) {
    case 1:
      document.getElementById("levi").play();
      break;

    case 2:
      document.getElementById("armin").play();
      break;

    case 3:
      document.getElementById("hange").play();
      break;

    case 4:
      document.getElementById("eren").play();
      break;

    case 5:
      document.getElementById("mikasa").play();
      break;
  }
}