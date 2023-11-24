import { dbUrl } from '@src/constants'
import mongoose from 'mongoose'

const url = process.env.MONGO_DB || dbUrl

const connectDb = async (): Promise<void> => {
  await mongoose.connect(url)
  console.log('Connected to MongoDB')
}

export default connectDb
