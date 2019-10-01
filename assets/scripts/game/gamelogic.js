'user strict'
const api = require('./gameApi.js')
const ui = require('./gameUi.js')

let player = 'x'

const switchPlayer = function () {
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
}

const checkIfEmpty = function (box) {
  if (($(box).html() === 'x') || ($(box).html() === 'o')) {
    console.log('click an empty space')
  } else {

    $(box).html(player)
    console.log('Box ID is', $(box).attr('id'))
   const position = $(box).attr('id')

   // gameBoard[position] = player


   // if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
   //   console.log('WINNER')
   // } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
   //   console.log('WINNER')
   // } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
   //   console.log('WINNER')
   // } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
   //   console.log('WINNER')
   // } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
   //   console.log('WINNER')
   // } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
   //   console.log('WINNER')
   // } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
   //   console.log('WINNER')
   // } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
   //   console.log('WINNER')
    switchPlayer()
  }
}

const playGame = function (event) {
  const box = event.target
  checkIfEmpty(box)
}

module.exports = {
  playGame
}
