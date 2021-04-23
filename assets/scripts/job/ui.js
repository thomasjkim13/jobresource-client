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

  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully!')
  setTimeout(() => {
  $('#message').text('')
  }, 2500)
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed')
}

const onChangePwSuccess = function () {
  $('.container').hide()
  

  $('#message').text('Password Changed!')
  setTimeout(() => {
    $('#message').text('')
    }, 2000)
  $('#change-pw').trigger('reset')
}

const onChangePwFailure = function () {
    $('#message').text('Change password failed')
  }

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onChangePwSuccess,
  onChangePwFailure
}