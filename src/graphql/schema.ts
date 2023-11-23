import { buildSchema } from 'graphql'
import {
  Producer,
  ProducerInput,
  Product,
  ProductQuery,
  CreateProductsMutation,
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
    ${CreateProductsMutation}
  }
`)

export default schema
