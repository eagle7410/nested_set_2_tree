const util = require('util')
let nes2tree = require('./src/index');
let data = require('./test/assets/data');

// TODO: clear
// console.log('res', data);
console.log(util.inspect(nes2tree(data), {showHidden: false, depth: null}))
