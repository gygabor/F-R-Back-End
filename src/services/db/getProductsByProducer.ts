import { Product } from '@src/db/models'
import type { IProduct } from '@src/db/models/Product'

const getProductsByProducer = async (producerId: string): Promise<IProduct[]> => {
  const products = await Product.find({ producerId }).populate({ path: 'producerId' })
  return products
}

export default getProductsByProducer
