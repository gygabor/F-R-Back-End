export const Producer =
`type Producer {
  _id: ID!
  name: String!
  country: String
  region: String
}`

export const ProducerInput =
`input ProducerInput {
  name: String!
  country: String
  region: String
}`
