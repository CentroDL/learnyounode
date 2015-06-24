var http = require('http');
var bl   = require('bl');

var urls      = process.argv.slice(2);
var callbacks = urls.length;
var content   = [];

urls.forEach( function( url, id ){
  http.get( url, function( response ){
    response.pipe( bl( function(err, data){

      if(err){
        throw(error);
      }

      content[id] = data.toString();
      callbacks -= 1;

      if( callbacks === 0 ){
        content.forEach( function( data){
          console.log( data );
        });
      }
    })); //response
  }); // http.get
}); // urls.forEach
