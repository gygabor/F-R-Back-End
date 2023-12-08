import { Product } from '@src/db/models'
import type { IProduct } from '@src/db/models/Product'
import type { Types } from 'mongoose'

const getProductById = async (_id: string): Promise<IProduct | null> => (
  await Product.findById(_id).populate({ path: 'producerId' })
)

export default getProductById
