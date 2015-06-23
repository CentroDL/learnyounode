var mymodule = require('./6-modular.js');


var print = function(err, files){
  if(err){
    throw(err);
  }

  for( file of files ){
    console.log(file);
  }
};

mymodule( process.argv[2], process.argv[3], print )
