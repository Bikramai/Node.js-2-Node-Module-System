// Example of global variables
// var sayHello = function() {

// }

// window.sayHello();


// what is the problem in global scope?
// whaen we define the function in another file, that new definition is going to override the previous definition.
// this is the problem with global scope. So, in order to build reliable and maintainable applications we should
// avoid defining variables and functions in the global scope. 

// Instead we need modularity to create small building blocks or modules where we define our variables and functions.
// Every file in a Node application is considered a module.
// The variables and functions defined in that file or  module are a scope to that file.
// In OOP, terms we say they are private, they are not available outside that container, or outside that module.

// Take away:- 
// Every Node application has at least one file or one module which we call the main module.
// Here app.js is our main module.
// let's see here, and check out in console.
console.log(module);

// Remember:- Iin Node, every file is a module, and 
// the variables and functions defined in that file are a scope to that module,
// they're not available outside of that module.