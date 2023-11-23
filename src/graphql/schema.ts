import { buildSchema } from 'graphql'
import {
  Producer,
  ProducerInput,
  Product,
  ProductQuery,
  ProductsMutation,
  ProductInput
} from './definitions'

const schema = buildSchema(`
  ${Producer}
  ${ProducerInput}
  ${Product}
  ${ProductInput}

  type Query {
    ${ProductQuery}
  }

  type Mutation {
    ${ProductsMutation}
  }
`)

export default schema
