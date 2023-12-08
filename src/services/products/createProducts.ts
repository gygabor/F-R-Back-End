import {
  getProducers,
  updateProducers,
  updateProducts,
  getProductById 
} from '@src/services/db'
import { ProductType } from './types'
import getCreateProductsOperations from './getCreateProductsOperations'
import { UpdatedProductType } from '@src/types'

const createProducts = async (products: ProductType[]): Promise<UpdatedProductType[]> => {
  const producers = products.map((product) => product.producer)

  await updateProducers(producers)

  const producersAll = await getProducers()
  const operations = getCreateProductsOperations(products, producersAll)
  
  const result = await updateProducts(operations)

  const insertedProducts = await Promise.all(Object.values(result.insertedIds).reduce(async (acc, id) => {
    const product = await getProductById(id)
    if (product) {
      acc = [...acc, {
        _id: product?._id,
        name: product?.name,
        vintage: product?.vintage,
        producer: product?.producerId,
      }]
    }
  }))

  return insertedProducts
}

export default createProducts
