var url = 'http://mylogger.io/log'; // we don't have to export this url coz this is purely implementation detail.

function log(message) {
    // Send an Http request
    console.log(message);
}

module.exports.log = log;
// module.exports.endPoint = url; 
// module.exports.log, so i'm adding a method call log to the exports object. And set it to log function we have defined.

// In other words, the object that we're exporting, has a single method called log.
// Similarly, if we want to export url, we could do like module.exports.url we set to url.
// example think of the DVD player.

