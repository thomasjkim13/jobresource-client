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
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const jobIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/jobs',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const create = function (data) {
  console.log('data is ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/jobs',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
    signIn,
    signUp,
    changePw,
    signOut,
    jobIndex,
    create
}