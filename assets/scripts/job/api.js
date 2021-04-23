'use strict'
const config = require('../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePw = function (data) {
    return $.ajax({
      method: 'POST',
      url: config.apiUrl + '/sign-in',
      data: data
    })
  }

module.exports = {
    signIn,
    signUp
}