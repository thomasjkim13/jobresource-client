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
  $('#update').hide()
  $('#post').hide()
  $('#job-destroy').hide()
  


  $('#sign-up').on('submit', jobEvents.onSignUp)
  $('#sign-in').on('submit', jobEvents.onSignIn)
  $('#change-pw').on('submit', jobEvents.onChangePw)
  $('.signout').on('click', jobEvents.onSignOut)
  $('.mainpage').on('click', jobEvents.onIndexJob)
  $('#post').on('submit', jobEvents.onCreateJob)
  $('#job-destroy').on('submit', jobEvents.onDestroyJob)
  $('#update').on('submit', jobEvents.onUpdateJob)


  $('#homepage').on('click', event => (
    $('.container').hide(), 
    $('.signout').show(),
    event.target,
    $('.postjob').on('click', event => (
      $('#update').hide(),
      $('#mainpage').hide(),
      $('#post').show(),
      $('#job-destroy').hide(),
      event.target
    )),
    $('.updatebtn').on('click', event => (
      $('#update').show(),
      $('#mainpage').hide(),
      $('#post').hide(),
      $('#job-destroy').hide(),
      event.target
    )),
    $('.mainpage').on('click', event => (
      $('#mainpage').show(),
      $('#company').hide(),
      $('#post').hide(),
      $('#update').hide(),
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
