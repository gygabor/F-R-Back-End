import { Product } from '@src/db/models'
import type { ProductType } from '@src/types'
import { CreateProductOperation } from '../products/types'

interface BulkWriteResult {
  upsertedIds: Record<number, any>
  insertedIds: Record<number, any>
}

const updateProducts = async (operations: CreateProductOperation[]): Promise<BulkWriteResult> => {
  const result = await Product.bulkWrite(operations)
  return {
    upsertedIds: result.upsertedIds,
    insertedIds: result.insertedIds,
  }
}

export default updateProducts
