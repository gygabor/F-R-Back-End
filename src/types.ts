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

export interface UpdateProductType {
  _id: string
  name?: string
  vintage?: string
  producerId?: string
}

export interface IProducerType {
  _id: Types.ObjectId
  name: string
  country?: string
  region?: string
}
