const http = require('http');

const port = 25565;

http.createServer(function(req, res){
    res.end("Hello World!");
}).listen(port);

console.log("Server online on port " + port);