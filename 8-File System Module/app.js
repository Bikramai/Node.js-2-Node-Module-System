// How to work with files in Node?

const fs = require('fs');

// fs.readdirSync('./');
// console.log(files);

fs.readdir('$', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files)
});

// Recap:-
// In order to work with files and directories in Node, 
// first we need to require the fs module, and then use one or more 
// of the methods defined in the module.
// All these methods come in pairs, asynchronous and synchronous.
// Always prefer to use asynchronous methods.