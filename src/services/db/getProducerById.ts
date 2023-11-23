import { Producer } from '@src/db/models'
import type { IProducer } from '@src/db/models/Producer'

const getProducerById = async (id: string): Promise<IProducer | null> => {
  return await Producer.findById(id)
}

export default getProducerById
