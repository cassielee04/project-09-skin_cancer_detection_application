const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
var path = require('path');
var formidable = require('formidable');
const request2 = require('request-promise');


var httpmodule = require('http');
var url1 = "http://8a3b936a.ngrok.io/photo_ML";
var fs = require('fs');

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



app.post('/detection', async function (req, res) {

    console.log(req.image)
    
//   var data = req.data;
//   console.log(req.files)
//   var options = {
//       method: 'POST',
//       uri: 'http://8a3b936a.ngrok.io/photo_ML',
//       body: data,
//       json: true // Automatically stringifies the body to JSON
//   };
  
//   var returndata;
//   var sendrequest = await request2(options)
//   .then(function (parsedBody) {
//       console.log(parsedBody); // parsedBody contains the data sent back from the Flask server
//       returndata = parsedBody; // do something with this data, here I'm assigning it to a variable.
//   })
//   .catch(function (err) {
      
//   });
  
//   res.send(returndata);

});


/*
app.post('/detection', (req, res) => {

  console.log("we are detecting")
  console.log(req)
  
  res.render(__dirname + '/view/detection.pug');
})
app.get('/Upload', (request, response) => {

  response.send('Front Page')

  // https://www.w3schools.com/html/html5_geolocation.asp
})
*/


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