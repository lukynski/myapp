var port = process.env.PORT || 1337;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! edited by visualstudio.code again');
});

app.listen(port, function () {
  console.log("Server running at http://localhost:%d", port);
});
