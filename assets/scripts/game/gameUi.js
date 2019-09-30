'user strict'
const store = require('../store')

const ui = require('../auth/ui.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']

// keep track of player
let play = 'x'
// swap player
const swapPlay = function() {
  if (play === 'x') {
    play = 'o'
  } else {
    play = 'x'
  }
}
