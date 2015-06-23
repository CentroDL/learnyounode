var http = require("http");

var print = function(data){
  console.log( data.toString() );
}

http.get( process.argv[2], function(response){
  response.setEncoding('utf8');
  response.on( "data",  print)
          .on( "error", print)
          .on( "end",   print)

});
