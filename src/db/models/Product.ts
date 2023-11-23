import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose'

export interface IProduct extends Document {
  name: string
  vintage: string
  producerId: mongoose.Types.ObjectId
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  vintage: { type: String, required: true },
  producerId: { type: mongoose.Types.ObjectId, required: true, ref: 'Producer' }
})

const Product = mongoose.model<IProduct>('Product', ProductSchema)

export default Product
