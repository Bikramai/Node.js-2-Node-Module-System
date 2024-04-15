// ExtenD EventEmitter :-
// the class to have all capabilities of the EventEmitter.
// The way we do that is by using the extends keyword that comes in ES6,

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{ 
    log(message) {
        // Send an HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://' });
    }
}


module.exports = Logger;

// we use Pascal case convention for naming classes.
// when a function is inside a class, we call that's a method in that class.

