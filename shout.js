function shout(message) {
  var shoutyMessage = message.toUpperCase();
  console.log(shoutyMessage);
}


console.log('we are in shout.js');

module.exports = shout;
