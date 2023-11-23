import { Product } from '@src/db/models'
import type { UpdateProductType } from '@src/types'
import getProducerById from './getProducerById'

const updateProduct = async (product: UpdateProductType): Promise<void> => {
  if (product.producerId) {
    const producer = await getProducerById(product.producerId)
    if (!producer) {
      throw new Error('Producer not found')
    }
  }

  await Product.updateOne({ _id: product._id }, product)
}

export default updateProduct
