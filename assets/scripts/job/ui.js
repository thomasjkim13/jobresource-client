'use strict'
const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Signed up successfully')
  setTimeout(() => {
  $('#message').text('')
  }, 1000)
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
  }, 1000)
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
    }, 1000)
  $('#change-pw').trigger('reset')
}

const onChangePwFailure = function () {
    $('#message').text('Password Not Match!')
  }

const onSignOutSuccess = function () {
    location.reload();
  $('#message').text('Signed Out')
  $('.container').show()
  $('.signout').hide()
  setTimeout(() => {
    $('#message').text('')
    }, 1000)

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