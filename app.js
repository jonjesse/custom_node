var exp = require('express');
var app = exp();
var oss = require('os');
var myhost = oss.hostname();

app.get('/', function(req, res) {
  var nothello = "this is NOT hello world...<br/><br/>" +"ContainerID:"+ myhost;
  res.send(nothello);
});
var sleep = require('system-sleep');
sleep(10);

var server = app.listen(3000, function()  {
    console.log("Listening on port " + server.address().port + "...");
});
module.exports = server;
