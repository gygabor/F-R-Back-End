import { Producer } from '@src/db/models'
import type { IProducer } from '@src/db/models/Producer'
import type { ProducerType } from '@src/types'

const getProducer = async (producer: ProducerType): Promise<IProducer | null> => {
  return await Producer.findOne(producer)
}

export default getProducer
