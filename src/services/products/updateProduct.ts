import type { UpdatedProductType, UpdateProductType } from '@src/types'
import { getProductById, updateProducers, updateProducts } from '@src/services/db'
import updateProductsOperations from './updateProductsOperations'
import getProducer from '../db/getProducer'

const updateProduct = async (product: UpdateProductType): Promise<UpdatedProductType | null> => {
  let producer
  if (product.producer) {
    await updateProducers([product.producer])
    producer = await getProducer(product.producer)

  }

  const operation = updateProductsOperations(product, producer)
  
  await updateProducts(operation)

  const updatdatedProduct = await getProductById(product._id)

  if (updatdatedProduct) {
    return {
      _id: updatdatedProduct?._id,
      name: updatdatedProduct?.name,
      vintage: updatdatedProduct?.vintage,
      producer: updatdatedProduct?.producerId,
    }
  } else {
    return updatdatedProduct
  }
}

export default updateProduct