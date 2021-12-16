const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register a listener

emitter.addListener('messageLogged', function (arg) {
    console.log('Listener is called', arg);
});

//Raise an event 
emitter.emit('messageLogged', { id: 1, url: 'https://wwww.walmart.com' });    // Making a noise, produce -- signalling something has happened
