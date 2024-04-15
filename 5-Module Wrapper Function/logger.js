// we call this -(function the module wrapper function. 
// (function (exports, requir, module, __filemane, __dirname) { // this function is purely for demo only
// In every module, require is one of the arguments that is passed ti the function.

console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log'; // we don't have to export this url coz this is purely implementation detail.

function log(message) {
    // Send an Http request
    console.log(message);
}

module.exports = log; // exports, module or

module.exports.log = log; //or
exports.log = log;

// but you cannot reset this exports or we cannot write 
exports = log; //coz this exports is reference to module.exports.

//__filemane, __dirname - which represents the name of file, and the path.

// })

// Now we know variables and functions we defined in a module are scoped to thaat module.
// They are private and not visible from the outside.
// But we might be wondering how Node does this? So let me show you. 
// On the very first line of the logger jsmodule, let me create syntactical error.
// define a variable x, set it to nothing. makes sure to write this code on the very first line.

// Now basically what happens under the hood is that Node doesn't execute code directly.
// It wraps it inside of a function. 
// Run time our code is going to be converted to something like this 
// -(function (exports, requir, module, __filemane, __dirname) {

// Take away:-
// Node doesn't execute our code directly. It always wraps, the code inside each module,
// in something like this, inside of a function.

