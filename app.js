const exp = require('express')
const app = exp()

app.get('/', (req, res) => res.send('this is NOT hello world...'))

var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});
module.exports = server;
