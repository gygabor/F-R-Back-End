export const Product =
`type Product {
  name: String!
  vintage: String!
  producer: Producer!
}`

export const ProductInput =
`input ProductInput {
  name: String!
  vintage: String!
  producerId: String!
}`

export const CreateProducts = `
  createProducts(products: [ProductInput!]!): String
`
