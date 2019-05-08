const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var multiparty = require('multiparty');
const request = require('request');
var path = require('path');
var util = require('util');
var formidable = require('formidable');
//const request2 = require('request-promise');


var httpmodule = require('http');
var url1 = "http://8a3b936a.ngrok.io/photo_ML";
var fs = require('fs');


const port = 5000


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
  var form = new multiparty.Form();
  
  form.parse(req, function(err, fields, files) {
    // res.writeHead(200, {'content-type': 'text/plain'});
    // res.write('received upload:\n\n');
    // res.end(util.inspect({fields: fields, files: files}));
    res.render(__dirname + '/view/output.pug');
  }); 

  form.on('file', function(name,file) {
    var formData = {
      file: {
        value:  fs.createReadStream(file.path),
        options: {
          filename: file.originalFilename
        }
      }
    };

    // Post the file to the upload server
    request.post({url: 'http://8a3b936a.ngrok.io/photo_ML', formData: formData});


});

});

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