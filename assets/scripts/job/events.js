'use strict'
const { data } = require('jquery')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePw = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  
  api.changePw(data)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
  }

const onIndexJob = function () {
  console.log('in events.js the button was clicked')
  api.jobIndex()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}


module.exports = {
    onSignIn,
    onSignUp,
    onChangePw,
    onSignOut,
    onIndexJob
}
