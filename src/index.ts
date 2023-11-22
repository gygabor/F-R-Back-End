import 'module-alias/register'
import app from './app'
import { port } from './constants'

app.listen(port, () => {
  console.log('Server running on port ' + port + '!')
})
