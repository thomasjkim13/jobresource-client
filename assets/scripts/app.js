'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const jobEvents = require('./job/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', jobEvents.onSignUp)
  $('#sign-in').on('submit', jobEvents.onSignIn)
})
