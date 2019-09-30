'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailurchange)
}
const onchangepassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changepassword(formData)
    .then(ui.onchangepasswordSuccess)
    .catch(ui.onchangepasswordFailure)
}

const signOut = function (event) {
  event.preventDefault()

  api.signOut(formData)
    .then(ui.onSignoutSuccess)
    .catch(ui.onSignoutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onchangepassword,
  signOut
}
