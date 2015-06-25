var http = require('http');
var url = require('url');

var port = process.argv[2];


var server = http.createServer(function( request, response){

  var parsedRequest = url.parse(request.url, true);
  var pathname = parsedRequest.pathname.split('/').pop();
  var date = new Date( parsedRequest.query.iso );

  response.setHeader('Content-Type', 'application/json');

  switch( pathname ){
    case "parsetime":
      var data = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };
      break;
    case "unixtime":
      var data = { unixtime: Number(date) };
      break;
  }

  response.write(JSON.stringify(data));
  response.end();

});


server.listen( port );
// { protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?iso=2015-06-25T02:54:32.447Z',
//   query: { iso: '2015-06-25T02:54:32.447Z' },
//   pathname: '/api/parsetime',
//   path: '/api/parsetime?iso=2015-06-25T02:54:32.447Z',
//   href: '/api/parsetime?iso=2015-06-25T02:54:32.447Z' }
