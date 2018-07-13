var choices = ['rock', 'paper', 'scissors']
var pChoice = ''
var compChoice = ''
var wins = 0
var losses = 0
var ties = 0

function playIF(playerChoice) {
  //set player choice
  pChoice = choices[playerChoice]
  //set comp choice
  compChoice = choices[Math.floor(Math.random() * 3)]
  //draw choices to page
  document.getElementById('p-chose').innerText = pChoice
  document.getElementById('c-chose').innerText = compChoice
  //determine result
  if (pChoice == compChoice) {
    document.getElementById('result').innerText = 'TIE!'
  } else if (pChoice == 'rock') {
    if (compChoice == 'paper') {
      document.getElementById('result').innerText = 'YOU LOSE!'
    } else {
      document.getElementById('result').innerText = 'YOU WIN!'
    }
  } else if (pChoice == 'paper') {
    if (compChoice == 'scissors') {
      document.getElementById('result').innerText = 'YOU LOSE!'
    } else {
      document.getElementById('result').innerText = 'YOU WIN!'
    }
  } else {
    if (compChoice == 'rock') {
      document.getElementById('result').innerText = 'YOU LOSE!'
    } else {
      document.getElementById('result').innerText = 'YOU WIN!'
    }
  }
}


function playSwitch(playerChoice) {
  //set choices
  pChoice = choices[playerChoice] || randChoice()
  compChoice = randChoice();
  var result = ''
  //determine winner
  switch (pChoice) {
    case compChoice:
      result = 'TIE!'
      break;
    case 'rock':
      if (compChoice == "paper") {
        result = "YOU LOSE!"
      } else {
        result = "YOU WIN!"
      }
      break;
    case 'paper':
      if (compChoice == "scissors") {
        result = "YOU LOSE!"
      } else {
        result = "YOU WIN!"
      }
      break;
    default:
      if (compChoice == "rock") {
        result = "YOU LOSE!"
      } else {
        result = "YOU WIN!"
      }
      break;
  }
  //draw to screen
  draw(result)
}


function play(playerChoice) {
  //set choices
  pChoice = choices[playerChoice] || randChoice()
  compChoice = randChoice();
  var result = ''
  //Key value pairs
  var win = {
    paper: 'rock',
    scissors: 'paper',
    rock: 'scissors'
  }
  //determine winner
  if(pChoice == compChoice){
    result = "TIE!"
    ties++
  }else if(win[pChoice]==compChoice){
    result = "YOU WIN!"
    wins++
  }else{
    result = "YOU LOSE!"
    losses++
  }
  //draw to screen
  draw(result)
}











//helper functions
function randChoice() {
  var randomChoice = choices[Math.floor(Math.random() * 3)]
  return randomChoice
}

function draw(result){
  document.getElementById('p-chose').innerHTML = pChoice
  document.getElementById('c-chose').innerHTML = compChoice
  document.getElementById('result').innerHTML = result
  document.getElementById('wins').innerHTML = wins
  document.getElementById('losses').innerHTML = losses
  document.getElementById('ties').innerHTML = ties
}