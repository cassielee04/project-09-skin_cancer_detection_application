const express = require('express')
const app = express()
const port = 3000

app.get('/Upload', (request, response) => {
  response.send('Front Page')
})

app.get('/Receive', (request, response) => {
    response.send('Where it receiveds and shows results')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('Error', err)
  }

  console.log(`server is listening on ${port}`)
})