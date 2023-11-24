import { buildSchema } from 'graphql'
import {
  ProducerTypes,
  ProductTypes,
  ProductQuery,
  ProductsMutation,
  ProducerQuery
} from './definitions'

const schema = buildSchema(`
  ${ProducerTypes}
  ${ProductTypes}

  type Query {
    ${ProductQuery}
    ${ProducerQuery}
  }

  type Mutation {
    ${ProductsMutation}
  }
`)

export default schema
