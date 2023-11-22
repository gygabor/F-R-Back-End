import { buildSchema } from 'graphql'
import { type } from 'os'

export const schema = buildSchema(`
  type Product {
    name: String!
    vintage: String!
    producerId: String!
  }

  input ProductInput {
    name: String!
    vintage: String!
    producerId: String!
  }

  type Producer {
    name: String!
    country: String
    region: String
  }

  type Query {
    hello: String
  }

  type Mutation {
    createProducts(products: [ProductInput!]!): String
  }
`)

interface Product {
  name: string
  vintage: string
  producerId: string
}

interface Props {
  products: Product[]
}

export const root = {
  hello: () => {
    return 'Hello world!'
  },
  createProducts: ({ products }: Props) => {
    console.log(products)
    return 'Products created'
  }
}
