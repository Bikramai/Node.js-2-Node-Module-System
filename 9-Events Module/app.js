// Event:-
//      A signal that something has happened.

// How to work with events module?

const EventEmitter = require('events'); //blueprint
// Note that the first letter of every word is uppercase.
// This is a convention that indicates that this Event Emitter is a class.
// it's not a function, it's not a simple value, it's a class.

// Class :-
// the class is container for properties and functions which we call methods.

const emitter = new EventEmitter(); //actual object
// here, emitter is an object.

// In case you don't know the difference between class and object.
// Let me give you a metaphor.
// -class is like a human, and an object is like an actual person.
// -a class defines the properties and behaviors of a concept of a human, 
// but an object is an actual instance of that class.


// Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});


//Raise an event
emitter.emit('messageLogged')
// emit-Making a noise, produce something -signalling 