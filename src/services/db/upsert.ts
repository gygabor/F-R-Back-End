import { Product, Producer } from '@src/db/models'
import type { ProductType } from '@src/types'

const upsert = async (products: ProductType[]): Promise<void> => {
  try {
    await Promise.all(products.map(async (prod) => {
      await Producer.findOneAndUpdate(
        { name: prod.producer.name },
        prod.producer,
        { upsert: true, new: true }
      )

      const producer = new Producer(prod.producer)

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

export default upsert
