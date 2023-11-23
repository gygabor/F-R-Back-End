import { buildSchema } from 'graphql'
import {
  ProducerTypes,
  ProductTypes,
  ProductQuery,
  ProductsMutation
} from './definitions'

const schema = buildSchema(`
  ${ProducerTypes}
  ${ProductTypes}

  type Query {
    ${ProductQuery}
  }

  type Mutation {
    ${ProductsMutation}
  }
`)

export default schema
