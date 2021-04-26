'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const jobEvents = require('./job/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-pw').hide()
  $('.signout').hide()
  $('#mainpage').hide()
  // $('#company').hide()
  $('#post').hide()
  


  $('#sign-up').on('submit', jobEvents.onSignUp)
  $('#sign-in').on('submit', jobEvents.onSignIn)
  $('#change-pw').on('submit', jobEvents.onChangePw)
  $('.signout').on('click', jobEvents.onSignOut)
  $('.mainpage').on('click', jobEvents.onIndexJob)
  


  $('#homepage').on('click', event => (
    $('.container').hide(), 
    $('.signout').show(),
    event.target,
    $('.postjob').on('click', event => (
      // $('#company').hide(),
      $('#mainpage').hide(),
      $('#post').show(),
      event.target
    )),
    // $('.companybtn').on('click', event => (
      // $('#company').show(),
      // $('#mainpage').hide(),
      // $('#post').hide(),
      // event.target
    // )),
    $('.mainpage').on('click', event => (
      $('#mainpage').show(),
      // $('#company').hide(),
      $('#post').hide(),
      event.target
    ))
  ))
})


  // $('.mainpage').on('click', event => (
  //   $('#mainpage').show(),
  //   $('#company').hide(),
  //   $('#post').hide(),
  //   event.target
  // ))

  // $('.companybtn').on('click', event => (
  //   $('#company').show(),
  //   $('#mainpage').hide(),
  //   $('#post').hide(),
  //   event.target
  // ))
  // $('.postjob').on('click', event => (
  //   $('#company').hide(),
  //   $('#mainpage').hide(),
  //   $('#post').show(),
  //   event.target
  // ))
