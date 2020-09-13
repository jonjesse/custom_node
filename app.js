var exp = require('express');
var app = exp();

app.get('/', function(req, res) {
  res.send('this is NOT hello world...');
});
var sleep = require('system-sleep');
sleep(10);

var server = app.listen(3000, function()  {
    console.log("Listening on port " + server.address().port + "...");
});
module.exports = server;
