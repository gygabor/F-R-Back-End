import { Product } from '@src/db/models'
import type { IProduct } from '@src/db/models/Product'

const getProduct = async (_id: string): Promise<IProduct | null> => {
  const product = await Product.findById(_id).populate({ path: 'producerId' })
  return product
}

export default getProduct
