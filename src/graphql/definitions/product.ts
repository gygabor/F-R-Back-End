import {
  getProduct,
  saveProduct,
  getProductsByProducer,
  updateProduct,
  deleteProducts
} from '@src/services/db'
import type { ProductType, UpdateProductType } from '@src/types'

export const ProductTypes = `
  type Product {
    _id: ID!
    name: String!
    vintage: String!
    producer: Producer!
  }

  input ProductInput {
    name: String!
    vintage: String!
    producer: ProducerInput!
  }

  input UpdateProductInput {
    _id: String!
    name: String
    vintage: String
    producerId: String
  }
`

export const ProductQuery = `
  product(_id: String!): Product!
  productsByProducer(producerId: String!): [Product!]!
`

export const ProductsMutation = `
  createProducts(products: [ProductInput!]!): String!
  updateProduct(product: UpdateProductInput!): String!
  deleteProducts(_ids: [String!]!): String!
`

interface CreateProps {
  products: ProductType[]
}

interface ProductProps {
  _id: string
}

interface ProductByProduceProps {
  producerId: string
}

interface UpdateProductProps {
  product: UpdateProductType
}

interface DeleteProductsProps {
  _ids: string[]
}

export const productResolvers = {
  product: async ({ _id }: ProductProps) => {
    return await getProduct(_id)
  },
  productsByProducer: async ({ producerId }: ProductByProduceProps) => {
    return await getProductsByProducer(producerId)
  },
  createProducts: async ({ products }: CreateProps) => {
    await saveProduct(products)
    return 'ok'
  },
  deleteProducts: async ({ _ids }: DeleteProductsProps) => {
    await deleteProducts(_ids)
    return 'ok'
  },
  updateProduct: async ({ product }: UpdateProductProps) => {
    await updateProduct(product)
    return 'ok'
  }
}
