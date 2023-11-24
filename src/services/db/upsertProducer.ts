import { Producer } from '@src/db/models'
import type { IProducer } from '@src/db/models/Producer'
import type { ProducerType } from '@src/types'

const upsertProducer = async (producer: ProducerType): Promise<IProducer> => {
  return await Producer.findOneAndUpdate(
    { name: producer.name },
    producer,
    { upsert: true, new: true }
  )
}

export default upsertProducer
