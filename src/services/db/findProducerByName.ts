import { Producer } from '@src/db/models'
import type { IProducer } from '@src/db/models/Producer'

const findProducerByName = async (name: string): Promise<IProducer> => {
  const producer = await Producer.findOne({ name })

  if (!producer) {
    throw new Error(`Producer with name ${name} not found`)
  }

  return producer
}

export default findProducerByName
