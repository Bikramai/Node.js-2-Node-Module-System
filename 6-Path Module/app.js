// Path Module:-
// If you want to work with paths, it's much easier to use the path modules as 
// supposed to working with strings.

const path = require('path'); //object with bunch of sueful methods.

var pathObj = path.parse(__filename); // path.parse is built-in function

console.log(pathObj);