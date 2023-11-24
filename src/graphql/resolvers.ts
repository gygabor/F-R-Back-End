import { productResolvers, producerResolvers } from './definitions'

const resolvers = {
  ...productResolvers,
  ...producerResolvers
}

export default resolvers
