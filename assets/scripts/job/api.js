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

const destroy = function (id) {
  return $.ajax({
    method: 'DELETE',
    // similar to index, but we have an id for the job we want to delete
    url: config.apiUrl + '/jobs/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, data) {
  return $.ajax({
    // set the method to PATCH to "partially update" a book
    method: 'PATCH',
    url: config.apiUrl + '/jobs/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    // send the formData along to update our book with
    data: data
  })
}

module.exports = {
    signIn,
    signUp,
    changePw,
    signOut,
    jobIndex,
    create,
    destroy,
    update
}