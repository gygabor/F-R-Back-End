import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { root } from './gql'
import { schema } from './graphql'
import connectDb from './db'

const app = express()

connectDb().catch((error) => {
  console.error('Error connecting to MongoDB:', error)
})

app.use(
  '/graphql',
  (req, res, next) => {
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true
    })(req, res).catch(next)
  }
)

export default app
