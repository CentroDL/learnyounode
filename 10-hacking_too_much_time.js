var net      = require('net');
var strftime = require('./node_modules/strftime');
var port     = process.argv[2];

var server = net.createServer( function(socket){

  var time = strftime( "%Y-%m-%d %H:%M", new Date() );

  socket.write(time);
  socket.end();

});


server.listen( port );
