import mongoose, { Schema } from 'mongoose'
import type { Document, Types } from 'mongoose'

export interface IProducer extends Document {
  _id: Types.ObjectId
  name: string
  country?: string
  region?: string
}

const ProducerSchema: Schema = new Schema({
  name: { type: String, required: true },
  country: String,
  region: String
})

const Producer = mongoose.model<IProducer>('Producer', ProducerSchema)

export default Producer
