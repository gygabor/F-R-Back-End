import {
  getProductById,
  getProductsByProducer,
  updateProduct,
  deleteProducts
} from '@src/services/db'
import fetchCsv from '@src/services/csv'
import type { ProductType, UpdateProductType } from '@src/types'
import { createProducts } from '@src/services/products'

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
  createProducts(products: [ProductInput!]!): [Product!]!
  updateProduct(product: UpdateProductInput!): String!
  deleteProducts(_ids: [String!]!): String!
  fetchProducts(url: String!): String!
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

interface FetchProductsProps {
  url: string
}

export const productResolvers = {
  product: async ({ _id }: ProductProps) => {
    return await getProductById(_id)
  },
  productsByProducer: async ({ producerId }: ProductByProduceProps) => {
    return await getProductsByProducer(producerId)
  },
  createProducts: async ({ products }: CreateProps) => {
    return createProducts(products)
  },
  deleteProducts: async ({ _ids }: DeleteProductsProps) => {
    await deleteProducts(_ids)
    return 'ok'
  },
  updateProduct: async ({ product }: UpdateProductProps) => {
    await updateProduct(product)
    return 'ok'
  },
  fetchProducts: async ({ url }: FetchProductsProps) => {
    await fetchCsv(url)
    return true
  }
}
