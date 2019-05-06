const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const port = 3000

app.get('/Upload', (request, response) => {
  response.send('Front Page')
  // https://www.w3schools.com/html/html5_geolocation.asp
})

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/Gmap.html'));
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