const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.post('/', (req, res) => {
  console.log('log', req.body)
  res.send({ log: true })
})

app.listen(8080, () => {
  console.log('listen on port 8080')
})
