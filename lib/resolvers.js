'use strict'

const mutations = require("./mutation")
const queries = require("./query")
const types = require('./types')

module.exports = {
  Query: queries,
  Mutation: mutations,
  ...types
}