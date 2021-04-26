'use strict'
const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Signed up successfully')
  setTimeout(() => {
  $('#message').text('')
  }, 1500)
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
  }, 1500)
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function () {
  $('#message').text('Invalid Username or Password')
}

const onChangePwSuccess = function () {
  // $('.container').hide()
  $('.signout').show()
  // $('.back').hide()
  // $('.front').show()

  

  $('#message').text('Password Changed!')
  setTimeout(() => {
    $('#message').text('')
    }, 1500)
  $('#change-pw').trigger('reset')
}

const onChangePwFailure = function () {
    $('#message').text('Password Not Match!')
  }

const onSignOutSuccess = function () {
  $('.container').show()
  $('.signout').hide()
  setTimeout(() => {
    $('#message').text('')
    }, 1500)

  location.reload();
  store.user = null
}

const onSignOutFailure = function () {
  $('#message').text('Error')
}

const onIndexSuccess = function (response) {
  // extract the jobs from our response's data so they are easier to use
  const jobs = response.jobs
  console.log(response)
  // this will be all of the html to show every job
  let jobHtml = ''
  // for each job in our response's data
  jobs.forEach(job => {
    // add some html to show that job, to our jobHtml variable
    jobHtml += `
      <p>Company: ${job.company}</p>
      <p>Title: ${job.title}</p>
      <p>experienceLevel: ${job.experienceLevel}</p>
      <button class='jobs-destroy-dynamic' data-id=${job._id}>Delete</button>
      <p>------------------------------------------------------------------------</p>`
  })
  // setting the job-display to have the html of all the jobs
  $('#job-display').html(jobHtml)
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onIndexSuccess
}