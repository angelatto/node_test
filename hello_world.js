var http = require('http');
var url = require('url');

http.createServer(function handler(req, res){
    var parseUrl = url.parse(req.url);
    console.log(parseUrl);
    var querystring = require('querystring');

    var parseQuery = querystring.parse(parseUrl.query, '&', '=');
    console.log(parseQuery);

    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>8080 Server Test</h1>');
    res.end('Hello world!\n');
}).listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337');

