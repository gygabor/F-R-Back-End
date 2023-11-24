import type { ProductType } from '@src/types'

interface ProductProps {
  Vintage: string
  'Product Name': string
  Producer: string
}

const parseProduct = (product: ProductProps): ProductType => {
  return {
    name: product['Product Name'],
    vintage: product.Vintage,
    producer: {
      name: product.Producer ? product.Producer : ' '
    }
  }
}

export default parseProduct
