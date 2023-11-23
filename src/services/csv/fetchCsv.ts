import { Transform } from 'stream'
import getCsvStream from './getCsvStream'

const group = new Transform({
  transform: (chunk, encoding, callback) => {
    console.log(chunk)
    callback(null, chunk)
  }
})

const fetchCsv = async (url: string): Promise<void> => {
  const csvStream = await getCsvStream(url)
  csvStream
    .pipe(group)
}

export default fetchCsv
