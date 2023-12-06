import {
  getProducers,
  upsertProducers,
  updateProducts,
  getProductById 
} from '@src/services/db'
import { ProductType } from './types'
import getCreateProductsOperations from './getCreateProductsOperations'

const createProducts = async (products: ProductType[]) => {
  const producers = products.map((product) => product.producer)

  await upsertProducers(producers)

  const producersAll = await getProducers()
  const operations = getCreateProductsOperations(products, producersAll)
  
  const result = await updateProducts(operations)

  const insertedProducts = await Promise.all(Object.values(result.insertedIds).map(async (id) => await getProductById(id)))

  return insertedProducts.map((product) => ({
    _id: product?._id,
    name: product?.name,
    vintage: product?.vintage,
    producer: product?.producerId,
  }))
}

export default createProducts
