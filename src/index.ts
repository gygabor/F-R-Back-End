import 'module-alias/register'
import 'dotenv/config'
import app from './app'
import { port } from './constants'

console.log(process.env.MONGO_DB)

app.listen(port, () => {
  console.log('Server running on port ' + port + '!')
})
