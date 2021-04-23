'use strict'
const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#sign-up').trigger('reset')
}
  
const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
}

const onSignInSuccess = function (response) {
  $('#sign-in').hide()
  $('#login').hide()
  $('#signup').hide()
  $('.chpw').hide()
  $('#change-pw').show()
  $('#homepage').show()

  store.user = response.user
  $('#message').text('Signed In Successfully!')
  setTimeout(() => {
  $('#message').text('')
  }, 2500)
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function () {
  $('#message').text('Invalid Username or Password')
}

const onChangePwSuccess = function () {
  $('.container').hide()
  $('.signout').show()
  

  $('#message').text('Password Changed!')
  setTimeout(() => {
    $('#message').text('')
    }, 2000)
  $('#change-pw').trigger('reset')
}

const onChangePwFailure = function () {
    $('#message').text('Password Not Match!')
  }

const onSignOutSuccess = function () {
  $('#message').text('Signed Out')

  store.user = null
}

const onSignOutFailure = function () {
  $('#message').text('Error')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure
}