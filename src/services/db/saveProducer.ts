import { Producer } from '@src/db/models'
import type { IProducer } from '@src/db/models/Producer'
import type { ProducerType } from '@src/types'

const saveProducer = async (producer: ProducerType): Promise<IProducer> => {
  return await Producer.create(producer)
}

export default saveProducer
