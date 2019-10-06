'use strict'

const authEvents = require('./auth/events')
const gamelogic = require('./game/gamelogic')
const gameEvents = require('./game/gameEvents')

$(() => {
  $('#board').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#play').on('click', gameEvents.startGame)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onchangepassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#board').on('click', gamelogic.playGame)
})
