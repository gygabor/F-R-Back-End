import { getProducers } from "@src/services/db"

export const ProducerTypes = `
  type Producer {
    _id: ID!
    name: String!
    country: String
    region: String
  }

  input ProducerInput {
    name: String!
    country: String
    region: String
  }
`

export const ProducerQuery = `
  producers: [Producer!]!
`
export const producerResolvers = {
  producers: async () => {
    return await getProducers()
  },
}