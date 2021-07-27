//learn to use modules
// using 4,5,6,7 module files

const names = require('./4-names');
const SayHi = require('./5-Utils')
require('./7-mind-granade')
const data = require('./6-alternate-flavour')
console.log(data)

SayHi('susan')
SayHi(names.john)
SayHi(names.peter)