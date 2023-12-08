import { IProducer } from '@src/db/models/Producer'
import { UpdateProductOperation } from './types'
import { UpdateProductType } from '@src/types'
import { Types } from 'mongoose'

const updateProductsOperations = (product: UpdateProductType, producer?: IProducer | null): UpdateProductOperation[] => {
  return [
    {
      updateOne: {
        filter: { _id: new Types.ObjectId(product._id) },
        update: { 
          name: product.name,
          vintage: product.vintage,
          producerId: producer?._id,
        },
      }
    }
  ]
}

export default updateProductsOperations
