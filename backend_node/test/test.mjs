var express = require('express');
var app = express();
var http = require('http');
app.get('/', function (req, res) {
    res.send('Hello World!');
});

http.get('http://localhost:8082/users', (resp) => {
  let data = '';

  // Un morceau de réponse est reçu
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // La réponse complète à été reçue. On affiche le résultat.
  resp.on('end', () => {
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
});

