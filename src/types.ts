import type { Types } from 'mongoose'

export interface ProductType {
  name: string
  vintage: string
  producer: string
}

export interface ProducerType {
  name: string
  country?: string
  region?: string
}

export interface IProducerType {
  _id: Types.ObjectId
  name: string
  country?: string
  region?: string
}
