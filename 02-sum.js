// example two

var numbers = process.argv.slice(2);
var sum = numbers.reduce( function(a,b){ return +a + +b; } );

console.log(sum);
