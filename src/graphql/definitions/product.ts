import { getProduct, saveProduct } from '@src/services/db'
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

export const ProductQuery = `
  product(_id: String!): Product!
`

export const CreateProductsMutation = `
  createProducts(products: [ProductInput!]!): String!
`

interface CreateProps {
  products: ProductType[]
}

interface ProductProps {
  _id: string
}

export const productResolvers = {
  product: async ({ _id }: ProductProps) => {
    return await getProduct(_id)
  },
  createProducts: async ({ products }: CreateProps) => {
    await saveProduct(products)
    return 'ok'
  }
}
