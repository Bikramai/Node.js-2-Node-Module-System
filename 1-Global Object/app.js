// Global:- which means we can access it anywhere, in any files.


console.log()


// some of the global in node.js
// This is just part of the standard JavaScript, we can use this on the client,
// we can use this inside of the browser, or inside of Node.
// These are some of the global objects in JavaScript.
setTimeout();
clearTimeout();


setInterval();
clearInterval();


window.console.log
// here window object that represents the global scope.
// So all the variables and functions that are defined globally 
// we can access them via this window object.

// In Node we don't have window object, instead we have another object called global.
// all these functions and objects we have above here, we can assess 
// them via the global object in Node js. so we can do

var message = '';
global.console.log

// but one thing we need to know about Node is that 
// these -var message = ''; variables that we define here, 
// they are not added to the global object.

// In otherwords, if we do a console.log of global.message,
// we're going to see undefined on the console, so let's see..
// So as we can see, the variables and functions that we defined here -var message = '';,
// they're not added to the global object. They are only scope to this file.
// they're not available outside of this file. And this is coz of Node's modular system.

