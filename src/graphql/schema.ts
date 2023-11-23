import { buildSchema } from 'graphql'
import {
  Producer,
  ProducerInput,
  Product,
  CreateProducts,
  ProductInput
} from './definitions'

const schema = buildSchema(`
  ${Producer}
  ${ProducerInput}
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
