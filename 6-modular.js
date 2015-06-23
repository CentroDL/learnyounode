var fs   = require('fs');
var path = require('path');

module.exports = function( directory, filter, callback ){

  fs.readdir( directory, function(err, files){

    if(err){
      return callback(err);
    }

    sorted = files.filter(
      function(fileName){
        return path.extname(fileName) === ('.' + filter);
      }
    );

    callback(err, sorted);

  });

};





