const EventEmitter = require('events'); 

const emitter = new EventEmitter(); //actual object

// Register a listener
// emitter.on('messageLogged', function(arg){ // e, eventarg
//     console.log('Listener called', arg);
// });

// In ES6 or ECMAScript6, we have new feature called arrow function. and best practice
// Register a listener 
emitter.on('messageLogged',(arg) => { // e, eventarg
    console.log('Listener called', arg);
});

//Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });
// emit-Making a noise, produce something -signalling 

