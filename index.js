// Highlight the selected weapon
function highlightBtn() {
  this.classList.add('playing');
}

// Takes off the highlight after a split second
function removeTransition() {
  this.classList.remove('playing');
}

// Picks random choice for the computer
function computerPlay() {
  let computerChoice;
  const computerNumber = Math.floor(Math.random() * 3);
  if (computerNumber === 0) {
    computerChoice = "ROCK";
  } else if (computerNumber === 1) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }
  return computerChoice;
}

// Set the counters at 0
let playerWins = 0;
let computerWins = 0;

function selectWeapons() {
  const playerSelection = this.id;
  console.log(playerSelection);
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

// DOM for the result and counter text

const announcement = document.querySelector('.result');
const playerWinsLog = document.querySelector('.yourWins');
const compWinsLog = document.querySelector('.compWins');
const body = document.querySelector('body');

// Checks the score at the end of a game and if one player has 5 points announces the winner

function checkScore() {
  if (playerWins === 5) {
    announcement.innerHTML = 'Winner winner chicken dinner! You are the first to reach 5 wins!';
    body.style.backgroundColor = "red";
  setTimeout(function(){ alert("That's all folks. Hit refresh to start a new game."); }, 2000);
    return;
  } else if (computerWins === 5) {
    announcement.innerHTML = "You're a big fat loser! The computer reached 5 wins before you!"
  body.style.backgroundColor = "red";
  setTimeout(function(){ alert("That's all folks. Hit refresh to start a new game."); }, 2000);
  return;
  } else return;
}

// Plays a round, announces the result and changes the score
function playRound(playerSelection, computerSelection) {



  checkScore();

  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    const result = "You win! ROCK beats SCISSORS.";
    playerWins++
    announcement.innerHTML = `${result}`;
    playerWinsLog.innerHTML = `${playerWins}`;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    const result = "You win! PAPER beats ROCK.";
    playerWins++
    announcement.innerHTML = `${result}`;
    playerWinsLog.innerHTML = `${playerWins}`;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    const result = "You win! SCISSORS beats PAPER.";
    playerWins++
    announcement.innerHTML = `${result}`;
    playerWinsLog.innerHTML = `${playerWins}`;
  } else if (playerSelection === computerSelection) {
    const result = "It's a draw!";
    announcement.innerHTML = `${result}`;
  } else {
    const result = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerWins++
    announcement.innerHTML = `${result}`;
    compWinsLog.innerHTML = `${computerWins}`;
  }

  checkScore();
}

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach((button) => {
button.addEventListener('click', highlightBtn);
});
buttons.forEach((button) => {
button.addEventListener('transitionend', removeTransition);
});
buttons.forEach((button) => {
button.addEventListener('click', function() {
  const playerSelection = this.id;
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});
});
