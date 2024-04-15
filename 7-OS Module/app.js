// How to get the information of OS in Node?
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory) //old version 

// New version 
// Template string
// ES6 / ES2015 : ECMAscript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
