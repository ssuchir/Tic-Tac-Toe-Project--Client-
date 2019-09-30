const gameApi = require('./gameApi.js')
const store = require('../store.js')

const startGame = function () {
  console.log('start game')
  gameApi.newGame()
    .then(storeGame)
}
const storeGame = function (data) {
  store.game = data.game
  console.log(store)
  console.log(store.game.id)
}

module.exports = {
  startGame

}
