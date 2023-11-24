import { Product } from '@src/db/models'
import type { ProductType } from '@src/types'
import upsertProducer from './upsertProducer'

const saveProducts = async (products: ProductType[]): Promise<void> => {
  const updatedProducts = await Promise.all(products.map(async (product) => {
    const producer = await upsertProducer(product.producer)

    return {
      name: product.name,
      vintage: product.vintage,
      producerId: producer._id
    }
  }))

  await Product.create(updatedProducts)
}

export default saveProducts
