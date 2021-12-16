const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();


//Register a listener
logger.on('messageLogged', function (arg) {
    console.log('Listener is called', arg);
});



logger.log('Log Message from Tom');