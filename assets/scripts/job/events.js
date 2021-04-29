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
  api.jobIndex()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onCreateJob = function(event) {
  event.preventDefault()
  
  const form = event.target
  const data = getFormFields(form)

  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onDestroyJob = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.destroy(data.job.id)
    .then(ui.onDestroySuccess)
    .catch(ui.onError)
}

const onUpdateJob = function (event) {
  event.preventDefault()
  // getting the data out of our form
  const form = event.target
  const data = getFormFields(form)
  // extracting the book id out of the formData
  const id = data.job.id
  // update the book with `id`, using the data from our form
  api.update(id, data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

module.exports = {
    onSignIn,
    onSignUp,
    onChangePw,
    onSignOut,
    onIndexJob,
    onCreateJob,
    onDestroyJob,
    onUpdateJob
}
