import { Product } from '@src/db/models'
import { Producer } from '@src/db/models'
import type { ProductType } from '@src/types'

const upsertProducts = async (products: ProductType[]): Promise<void> => {
  try {
    const producers = await Producer.find()

    const productOperations = products.map((product) => (
      {
        updateOne: {
          filter: { 
            name: product.name,
            vintage: product.vintage
          },
          update: { 
            name: product.name, 
            vintage: product.vintage, 
            producerId: producers.find((prod) => prod.name === product.producer.name)?._id 
          },
          upsert: true,
        }
      }
    ))

    Product.bulkWrite(productOperations)

  } catch (err) {
    console.log(err)
  }
}

export default upsertProducts
