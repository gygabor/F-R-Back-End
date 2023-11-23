import type { Types } from 'mongoose'

export interface ProducerType {
  name: string
  country?: string
  region?: string
}

export interface ProductType {
  name: string
  vintage: string
  producer: ProducerType
}

export interface IProducerType {
  _id: Types.ObjectId
  name: string
  country?: string
  region?: string
}
