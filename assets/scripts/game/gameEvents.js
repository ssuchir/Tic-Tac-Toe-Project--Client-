const gameApi = require('./gameApi.js')
const store = require('../store.js')
const ui = require('./../auth/ui.js')

const storeGame = function (data) {
  store.game = data.game
  console.log(store)
  console.log(store.game.id)
}

const reset = function (startGame) {
  $('.square').trigger('reset')
  store.player = 'X'
  gameApi.updateGame()
    .then(storeGame)
}

const onGamesPlayed = function (event) {
  event.preventDefault()
  gameApi.getGamesPlayed()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  storeGame,
  reset,
  onGamesPlayed

}
