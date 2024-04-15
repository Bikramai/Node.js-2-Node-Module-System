const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
logger.log('message');

// when we run this application we are only going to see this 'message'.
// In other words, this event listener will not be call.

// Why that happens?
// => Reason for this is here we are working with two different EventEmitters.
// In app.js we have this -const emitter = new EventEmitter(); eventemitter object.
// In logger module, we have another -const emitter = new EventEmitter(); eventemitter object.

// Earlier we knew that class is like a blueprint and an object is an actual instance.
// In this case, we do have two different objects.

// REcap:- if you want to raise events in your application to signal that something 
// has happened, you need to create a class, that extends EventEmitter.
// with this, that class will have all the functionality defined in EventEmitter. 
// But you can also add additional functionality, in this case, we have the ability
// to log a message, and then inside that class whenever you want to raise an event 
// you use this




