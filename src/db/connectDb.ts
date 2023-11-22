import mongoose from 'mongoose'
import { dbUrl } from '../constants'

const connectDb = async (): Promise<void> => {
  await mongoose.connect(dbUrl)
  console.log('Connected to MongoDB')
}

export default connectDb
