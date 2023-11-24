import { Product } from '@src/db/models'
import type { ProductType } from '@src/types'
import upsertProducer from './upsertProducer'
import { IProduct } from '@src/db/models/Product'

const saveProducts = async (products: ProductType[]): Promise<IProduct[]> => {
  const updatedProducts = await Promise.all(products.map(async (product) => {
    const producer = await upsertProducer(product.producer)

    return {
      name: product.name,
      vintage: product.vintage,
      producerId: producer._id
    }
  }))

  return await Product.create(updatedProducts)
}

export default saveProducts
