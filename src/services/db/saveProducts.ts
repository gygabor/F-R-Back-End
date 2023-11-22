import { Product } from '@src/db/models'
import type { ProductType } from '@src/types'
import findProducerByName from './findProducerByName'

const saveProducts = async (products: ProductType[]): Promise<void> => {
  try {
    const updatedProducts = await Promise.all(products.map(async (product) => {
      const producer = await findProducerByName(product.producer)

      return {
        name: product.name,
        vintage: product.vintage,
        producerId: producer._id
      }
    }))

    await Product.create(updatedProducts)
  } catch (error) {
    console.error('Error saving product:', error)
  }
}

export default saveProducts
