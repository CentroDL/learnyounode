var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var fileName = process.argv[3];


var server = http.createServer( function(request, response){
  var file = fs.createReadStream(fileName);
  file.setEncoding('utf8');
  response.end( file );
});


server.listen( port );
