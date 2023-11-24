import { MONGO_URI } from '@src/constants'
import mongoose from 'mongoose'

const uri = process.env.MONGO_URI || MONGO_URI

const connectDb = async (): Promise<void> => {
  await mongoose.connect(uri)
  console.log('Connected to MongoDB')
}

export default connectDb
