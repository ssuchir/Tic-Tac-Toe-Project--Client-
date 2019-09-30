'use strict'

const store = require('../store')
const successMessage = function (newText) {
  $('#message').text('signed up successfully!')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text('newText')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('signed up successfully!')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
}

const onSignInSuccess = function (responseData) {
  successMessage('signed in successfully!')
  console.log('responseData is', responseData)

  // save the 'user' we got from the API inside of 'store'
  // so we can use it later, from any file
  store.user = responseData.user
  console.log('store is', store)
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
}

const onchangepasswordSuccess = function () {
  successMessage('Changepassword successfully!')
}

const onchangepasswordFailure = function () {
  failureMessage('Changepassword failed')
}
const onSignoutSuccess = function () {
  successMessage('Signed out successfully!')
}

const onSignoutFailure = function () {
  failureMessage('Sign out failed')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onchangepasswordSuccess,
  onchangepasswordFailure,
  onSignoutSuccess,
  onSignoutFailure
}
