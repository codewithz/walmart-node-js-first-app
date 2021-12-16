const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register a listener

emitter.addListener('messageLogged', function () {
    console.log('Listener is called')
});

//Raise an event 
emitter.emit('messageLogged');    // Making a noise, produce -- signalling something has happened