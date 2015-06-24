var http = require('http');
var map  = require('through2-map');

var port = process.argv[2];

 // var map = require('through2-map')
 //    inStream.pipe(map(function (chunk) {
 //      return chunk.toString().split('').reverse().join('')
 //    })).pipe(outStream)


var server =  http.createServer( function( request, response){

  if( request.method === "POST"){
    request.pipe( map(function(content){
      return content.toString().toUpperCase();
    }) ).pipe(response);
  }

});


server.listen( port );
