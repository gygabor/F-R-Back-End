import 'module-alias/register'
import 'dotenv/config'
import app from './app'
import { PORT } from './constants'

const port = process.env.PORT || PORT

app.listen(port, () => {
  console.log('Server running on port ' + port + '!')
})
