'user strict'
const api = require('./gameApi.js')
const ui = require('./gameUi.js')
const store = require('../store')
let gameOver = false
let gameBoard = ['', '', '', '', '', '', '', '', '']

const startGame = function () {
  $('.square').text('')
  store.player = 'x'
  gameBoard = ['', '', '', '', '', '', '', '', '']
  gameOver = false
  console.log('start game')
  api.newGame()
    .then(storeGame)
}

const storeGame = function (data) {
  store.game = data.game
  console.log(store)
  console.log(store.game.id)
}

const switchPlayer = function () {
  if (store.player === 'x') {
    store.player = 'O'
    console.log(store)
  } else {
    store.player = 'x'
    console.log(store)
  }
}

const checkIfEmpty = function (box) {
  if (($(box).html() === 'x') || ($(box).html() === 'Os') || gameOver === true) {
    $('#message').text('invalid move')
  } else {
    console.log('the id of the box', $(box).attr('id'))
    store.position = $(box).attr('id')
    $(box).html(store.player)
    gameBoard[store.position] = store.player
    api.updateGame()
      .then(storeGame)
  }
}

const checkWin = function () {
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    $('#message').text('WINNER is ' + gameBoard[0])
    gameOver = true
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    $('#message').text('WINNER is ' + gameBoard[3])
    gameOver = true
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    $('#message').text('WINNER is ' + gameBoard[6])
    gameOver = true
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    $('#message').text('WINNER is ' + gameBoard[0])
    gameOver = true
  } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    $('#message').text('WINNER is ' + gameBoard[1])
    gameOver = true
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    $('#message').text('WINNER is ' + gameBoard[2])
    gameOver = true
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    $('#message').text('WINNER is ' + gameBoard[0])
    gameOver = true
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    $('#message').text('WINNER is ' + gameBoard[2])
    gameOver = true
  }
}

const playGame = function (event) {
  // console.log(event.target)
  // console.log(event.target.dataset.box)
  const box = event.target
  checkIfEmpty(box)
  switchPlayer()
  // $(box).html(player)
  checkWin()
}

module.exports = {
  playGame,
  startGame
}
