import { buildSchema } from 'graphql'
import {
  Producer,
  Product,
  CreateProducts,
  ProductInput
} from './definitions'

const schema = buildSchema(`
  ${Producer}
  ${Product}
  ${ProductInput}

  type Query {
    hello: String
  }

  type Mutation {
    ${CreateProducts}
  }
`)

export default schema
