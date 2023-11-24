import { Producer } from '@src/db/models'
import type { IProducer } from '@src/db/models/Producer'

const getProducers = async (): Promise<IProducer[]> => {
  return await Producer.find()
}

export default getProducers
