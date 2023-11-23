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
