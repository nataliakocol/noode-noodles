console.log('hello world!!');

function square(n) {
  return n*n;
}

for(var i = 0; i < 10; i ++) {
  console.log(square(i));
}

var shout = require('./shout');
shout('omgggg');
