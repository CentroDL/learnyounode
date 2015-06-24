var fs   = require('fs');
var http = require('http');
// var bl   = require('bl');

var port     = process.argv[2];
var fileName = process.argv[3];

var server = http.createServer( function(request, response){

  fs.createReadStream( fileName ).pipe( response );

});


server.listen( port );
