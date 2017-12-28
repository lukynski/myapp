var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! edited by visualstudio.code');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
