import axios from 'axios'

const getCsvStream = async (url: string): Promise<any> => {
  const res = await axios.get(url, {
    responseType: 'stream'
  })

  return res.data
}

export default getCsvStream
