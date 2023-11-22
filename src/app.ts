import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema, root } from './gql'

const app = express()

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
