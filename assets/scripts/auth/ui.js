'use strict'

const store = require('../store')
const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  console.log('responseData is', responseData)
  $('#play').show()
  $('#board').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#game-played').show()
  store.user = responseData.user
  console.log('store is', store)
}

const onSignInFailure = function () {
  failureMessage('Sign in failed.')
}

const onchangepasswordSuccess = function () {
  successMessage('Password has successfully been changed.')
    $('#change-password').trigger('reset')
}

const onchangepasswordFailure = function () {
  failureMessage('Failed to change password. Please try again.')
  $('#change-password').trigger('reset')
}
const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  $('#play').hide()
  $('#board').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#game-played').hide()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
}

const onGetGamesSuccess = function (response) {
  console.log('succes', response)
  $('#get-games-played').text('Games Played: ' + response.games.length)
}

const onGetGamesFailure = function (response) {
  console.log('fail', response)
  $('#get-games-played').text('Failed to get Game History')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onchangepasswordSuccess,
  onchangepasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onGetGamesSuccess,
  onGetGamesFailure
}
