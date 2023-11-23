import { saveProduct } from '../../services/db'
import type { ProductType } from '@src/types'

export const Product =
`type Product {
  _id: ID!
  name: String!
  vintage: String!
  producer: Producer!
}`

export const ProductInput =
`input ProductInput {
  name: String!
  vintage: String!
  producer: String!
}`

export const CreateProducts = `
  createProducts(products: [ProductInput!]!): [Product!]!
`

interface Props {
  products: ProductType[]
}

export const productResolvers = {
  createProducts: async ({ products }: Props) => {
    console.log(products)
    return await saveProduct(products)
  }
}
