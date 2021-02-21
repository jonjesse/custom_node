var exp = require('express');
var app = exp();
var oss = require('os');
var myhost = oss.hostname();
var netint = oss.networkInterfaces();
console.log(netint);

app.get('/', function(req, res) {
  var nothello = "Testing...<br/><br/>" +"ContainerID: "+ myhost+"<br/>SourceIP: "+req.connection.remoteAddress+"<br/>Hostaddress: "+req.headers.host+"<br/>ContainerIP: "+netint['eth0'][0].address;
  console.log(req.headers);
  res.send(nothello);
});
//var sleep = require('system-sleep');
//sleep(10);

var server = app.listen(3000, function()  {
    console.log("Listening on port " + server.address().port + "...");
});
module.exports = server;
