import { Product } from '@src/db/models'
import { CreateProductOperation, UpdateProductOperation } from '../products/types'

interface BulkWriteResult {
  upsertedIds: Record<number, any>
  insertedIds: Record<number, any>
}

const updateProducts = async (operations: CreateProductOperation[] | UpdateProductOperation[]): Promise<BulkWriteResult> => {
  const result = await Product.bulkWrite(operations)
  return {
    upsertedIds: result.upsertedIds,
    insertedIds: result.insertedIds,
  }
}

export default updateProducts
