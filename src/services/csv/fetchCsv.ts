import csv from 'csv-parser'
import getCsvStream from './getCsvStream'
import type { ProductType } from '@src/types'
import parseProduct from './parseProduct'
import { upsert } from '../db'

const fetchCsv = async (url: string): Promise<void> => {
  let products: ProductType[] = []

  const csvStream = await getCsvStream(url)

  csvStream
    .pipe(csv())
    .on('data', async (data: any) => {
      products.push(parseProduct(data))
      if (products.length === 100) {
        csvStream.pause()
        await upsert(products)
        products = []
        csvStream.resume()
      }
    })
    .on('error', (error: Error) => {
      console.log('Error while reading file.')
      console.error(error)
    })
    .on('end', () => {
      console.log('Finished reading file.')
    })
}

export default fetchCsv
