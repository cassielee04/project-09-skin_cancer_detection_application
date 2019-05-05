const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Front Page')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Error', err)
  }

  console.log(`server is listening on ${port}`)
})