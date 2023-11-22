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
  createProducts(products: [ProductInput!]!): [Product!]!
`
interface ProductType {
  name: string
  vintage: string
  producerId: string
}

interface Props {
  products: ProductType[]
}

export const productResolvers = {
  createProducts: ({ products }: Props) => {
    console.log(products)
    return products
  }
}
