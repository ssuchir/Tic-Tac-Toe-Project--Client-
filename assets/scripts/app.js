'use strict'

const authEvents = require('./auth/events')
const gamelogic = require('./game/gamelogic')
const gameEvents = require('./game/gameEvents')

$(() => {
  $('#play').on('click', gameEvents.startGame)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onchangepassword)
  $('#sign-out').on('submit', authEvents.onsignout)
  $('#board').on('click', gamelogic.playGame)
})
