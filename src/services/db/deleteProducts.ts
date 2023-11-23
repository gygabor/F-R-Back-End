import { Product } from '@src/db/models'

const deleteProducts = async (_ids: string[]): Promise<void> => {
  await Promise.all(_ids.map(async (_id) => {
    await Product.deleteOne({ _id })
  }))
}

export default deleteProducts
