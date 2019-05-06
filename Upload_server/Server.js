const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
var path = require('path');
var formidable = require('formidable');

var httpmodule = require('http');
var url1 = "http://1bfa1f4e.ngrok.io/photo_ML";
var fs = require('fs');
const fileSystemModule = require("tns-core-modules/file-system")

const port = 3000


app.use(bodyParser.json());
app.use(express.static(__dirname + '/view'));
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');


app.get('/',(req,res)=>{  
  console.log("Welcome to CareSkin")
  res.render(__dirname + '/view/index.pug');

});

app.get('/Upload', (req, res) => {
  res.render(__dirname + '/view/upload.pug');
})


app.post('/detection', (req, res) => {
  console.log("we are detecting")
  // var formData = {

  //   file: fs.createReadStream('testImage_2.jpg')
  // };
  // request.post({url:"http://1bfa1f4e.ngrok.io/photo_ML", formData: formData}, function optionalCallback(err, httpResponse, body) {
  //   if (err) {
  //     return console.error('upload failed:', err);
  //   }
  //   console.log('Upload successful!  Server responded with:', body);

  res.render(__dirname + '/view/detection.pug');
})
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