const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
var path = require('path');

const port = 3000


app.use(bodyParser.json());

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');


app.get('/',(req,res)=>{  
  console.log("Welcome to CareSkin",req.cookies)
  res.render(__dirname + '/view/index.pug');

});

app.get('/Upload', (request, response) => {
  response.send('Front Page')
  // https://www.w3schools.com/html/html5_geolocation.asp
})

app.get('/gmap', (request, response) => {
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