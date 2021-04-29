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
    url: config.apiUrl + '/jobs/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/jobs/' + id,
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
    create,
    destroy,
    update
}