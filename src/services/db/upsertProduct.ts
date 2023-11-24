import { Product } from '@src/db/models'
import type { ProductType } from '@src/types'
import upsertProducer from './upsertProducer'

const upsertProducts = async (products: ProductType[]): Promise<void> => {
  try {
    await Promise.all(products.map(async (prod) => {
      const producer = await upsertProducer(prod.producer)

      const product = {
        name: prod.name,
        vintage: prod.vintage,
        producerId: producer._id
      }

      return await Product.findOneAndUpdate(
        { name: product.name, vintage: product.vintage },
        product,
        { upsert: true, new: true }
      )
    }))
  } catch (err) {
    console.log(err)
  }
}

export default upsertProducts
