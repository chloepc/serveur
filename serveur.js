console.log('demarrage du serveur');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('réponse à une requête');
  res.send('Hello World!!!');
});

app.use(express.static(__dirname + '/public'));

console.log('serveur initialisé');
var server = app.listen(3000);
