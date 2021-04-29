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
  $('#message').text('Logged Out Successfully!')
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
      <p class="comname">COMPANY: ${job.company}</p>
      <p class="comtitle">TITLE: ${job.title}</p>
      <p class="comlevel">LEVEL: ${job.level}</p>
      <p class="jobid">Id: ${job._id}</p>
      <p class="breakline">------------------------------------------------------------------------</p>`
  })
  $('#job-destroy').show()
  // setting the job-display to have the html of all the jobs
  $('#job-display').html(jobHtml)
}

const onCreateSuccess = function () {
  $('#message').text('Job successfully created!')
  setTimeout(() => {
    $('#message').text('')
    }, 1500)
  $('#post').trigger('reset')
}

const onDestroySuccess = function () {
  $('#message').text('Job successfully deleted! Click JOBS tab to refresh')
  setTimeout(() => {
    $('#message').text('')
  }, 1500)
  $('#job-display').trigger('reset')
  $('#job-destroy').trigger('reset')

}

const onUpdateSuccess = function () {
  $('#message').text('Job successfully updated! Click JOBS tab to refresh.')
  setTimeout(() => {
    $('#message').text('')
  }, 1500)
  $('#update').trigger('reset')
}

const onError = function () {
  $('#message').text('Something went wrong, please try again.')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').text('')
    $('#message').removeClass('failure')
  }, 1500)
  $('form').trigger('reset')
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
  onIndexSuccess,
  onCreateSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onError
}