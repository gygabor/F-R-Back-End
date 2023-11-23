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
  producer: ProducerInput!
}`

export const CreateProducts = `
  createProducts(products: [ProductInput!]!): String!
`

interface Props {
  products: ProductType[]
}

export const productResolvers = {
  createProducts: async ({ products }: Props) => {
    const p = await saveProduct(products)
    console.log(p)
    return 'ok'
  }
}
