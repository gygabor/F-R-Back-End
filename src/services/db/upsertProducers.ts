import type { ProducerType } from '@src/types'
import { Producer } from '@src/db/models'


const upsertProducers = async (producers: ProducerType[]) => {
  const producerOperations = producers.map((producer) => (
    {
      updateOne: {
        filter: { name: producer.name },
        update: { 
          name: producer.name,
          country: producer.country,
          region: producer.region
        },
        upsert: true,
      }
    }
  ))
  await Producer.bulkWrite(producerOperations)
}

export default upsertProducers
