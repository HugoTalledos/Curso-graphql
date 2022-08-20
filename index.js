'use strict'
require('dotenv').config()
const { makeExecutableSchema } = require('@graphql-tools/schema')
const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync }= require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = 3000
const  isDev = process.env.NODE_ENV !== 'production'
// difiniendo esquema inicial

const typeDefs = readFileSync(
  join(
    __dirname,
    'lib',
    'schema.graphql'
  ), 'utf-8')

app.use(cors())

const schema = makeExecutableSchema({ typeDefs, resolvers })

// cpmfiguirar los resolvers

app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: isDev
}))

app.listen(port, () => {
  console.log(`Server is listening at ${port}`)
})
