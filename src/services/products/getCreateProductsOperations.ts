import { IProducer } from '@src/db/models/Producer'
import { CreateProductOperation, ProductType } from './types'

const getCreateProductsOperations = (products: ProductType[], producers: IProducer[]): CreateProductOperation[] => {
  return products.map((product) => {
    const producer = producers.find((producer) => (
      producer.name === product?.producer?.name
    ))

    return {
      insertOne: {
        document: {
          name: product.name,
          vintage: product.vintage,
          producerId: producer?._id,
        }
      }
    }
  })
}

export default getCreateProductsOperations
