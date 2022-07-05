// import people module 
const {people,numbers} = require('./people');

console.log(people, numbers);


// modules exists into node for example operating system (os) ... etc.
const os = require('os');

console.log(os.platform(),os.hostname(),os.homedir());