const express = require('express');
const app = express();
const port = 8080;
var script = require('./script');

// call script
script.a();

// Define the static file path
app.use(express.static(__dirname+'/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => console.log('The server running on Port http://localhost:8080/ '));

