'user strict'
const api = require('./gameApi.js')
const ui = require('./gameUi.js')

let player = 'x'

const switchPlayer = function () {
  if (player === "x") {
    player = "y"
  } else {
    player = "x"
  }
}

const checkIfEmpty = function (box) {
  if (($(box).html() === 'x') || ($(box).html() === 'y')) {
    console.log('click an empty space')
  } else {
    $(box).html(player)
    switchPlayer()
  }
}

const playGame = function (event) {
  // console.log(event.target)
  // console.log(event.target.dataset.box)
  const box = event.target
  checkIfEmpty(box)
  // $(box).html(player)
}

module.exports = {
  playGame
}
