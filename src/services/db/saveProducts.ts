import { Product } from '@src/db/models'
import type { ProductType } from '@src/types'
import getProducer from './getProducer'
import saveProducer from './saveProducer'

const saveProducts = async (products: ProductType[]): Promise<void> => {
  const updatedProducts = await Promise.all(products.map(async (product) => {
    let producer = await getProducer(product.producer)

    if (!producer) {
      producer = await saveProducer(product.producer)
    }

    return {
      name: product.name,
      vintage: product.vintage,
      producerId: producer._id
    }
  }))

  await Product.create(updatedProducts)
}

export default saveProducts
